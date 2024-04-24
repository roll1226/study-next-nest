import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { env } from "@/env/dotEnv";
import { Logger } from "./utils/debugger/Logger";
import { HasuraLogger } from "./utils/debugger/HasuraLogger";
import { LocalStorages } from "./utils/LocalStorages";
import { Jwt } from "./utils/lib/jwt/Jwt";

const errorLink = onError((errors) => {
  const { graphQLErrors, networkError } = errors;
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      Logger.debug(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) Logger.debug(`[Network error]: ${networkError}`);
});

const authToken = LocalStorages.getAuthToken();
Logger.debug(authToken);
const apolloHeader: Record<string, string> = authToken
  ? {
      Authorization: `Bearer ${
        env.isDevelopment() ? Jwt.getEmulatedSignedToken(authToken) : authToken
      }`,
    }
  : {
      "x-hasura-admin-secret": `${env.getHasuraGraphQLAdminSecret()}`,
    };

const httpLink = createHttpLink({
  uri: env.getHasuraGraphQLEndpoint(),
  headers: apolloHeader,
});

const wsLink = new WebSocketLink({
  uri: `${env.getHasuraGraphQLWebsocketEndpoint()}`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: apolloHeader,
    },
  },
});

// 開発環境のみ読み出されるようにする
HasuraLogger.Messages();

const link = ApolloLink.from([errorLink]).split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache(),
  link,
});
