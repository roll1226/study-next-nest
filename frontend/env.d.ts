declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        HASURA_GRAPHQL_ADMIN_SECRET: string;
        HASURA_GRAPHQL_ENDPOINT: string;
      }
    }
  }
}
