declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT: string;
        NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET: string;
        NEXT_PUBLIC_HASURA_GRAPHQL_WEBSOCKET_ENDPOINT: string;
      }
    }
  }
}
