import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { getMainDefinition } from "@apollo/client/utilities";

const errorLink = onError((errors) => {
  const { graphQLErrors, networkError } = errors;
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
  headers: {
    "x-hasura-admin-secret": `${process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET}`,
  },
});

const wsLink = new WebSocketLink({
  uri: `${process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WEBSOCKET_ENDPOINT}`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": `${process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET}`,
      },
    },
  },
});

// 開発環境のみ読み出されるようにする
if (process.env.NODE_ENV !== "production") {
  loadDevMessages();
  loadErrorMessages();
}

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
