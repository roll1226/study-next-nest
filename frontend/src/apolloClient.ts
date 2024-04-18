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
import HasuraLogger from "./utils/debugger/hasuraLogger";
import Logger from "./utils/debugger/logger";

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

const httpLink = createHttpLink({
  uri: env.getHasuraGraphQLAdminSecret(),
  headers: {
    "x-hasura-admin-secret": `${env.getHasuraGraphQLAdminSecret()}`,
  },
});

const wsLink = new WebSocketLink({
  uri: `${env.getHasuraGraphQLWebsocketEndpoint()}`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": `${env.getHasuraGraphQLAdminSecret()}`,
      },
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
