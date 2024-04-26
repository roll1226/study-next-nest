declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT: string;
        NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET: string;
        NEXT_PUBLIC_HASURA_GRAPHQL_WEBSOCKET_ENDPOINT: string;
        NEXT_PUBLIC_ENV: string;
        NEXT_PUBLIC_API_KEY: string;
        NEXT_PUBLIC_AUTH_DOMAIN: string;
        NEXT_PUBLIC_PROJECT_ID: string;
        NEXT_PUBLIC_STORAGE_BUCKET: string;
        NEXT_PUBLIC_MESSAGING_SENDER_ID: string;
        NEXT_PUBLIC_APP_ID: string;
        NEXT_PUBLIC_MEASUREMENT_ID: string;
        NEXT_PUBLIC_USE_FIREBASE_EMULATOR: "run" | undefined;
        NEXT_PUBLIC_HASURA_TOKEN_KEY: string;
        NEXT_PUBLIC_HASURA_GRAPHQL_JWT_SECRET: string;
      }
    }
  }
}
