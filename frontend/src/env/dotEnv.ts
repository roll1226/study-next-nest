import { DotEnvInterface } from "@/interface/DotEnvInterface";

class DotEnv implements DotEnvInterface {
  getHasuraGraphQLAdminSecret = () => {
    return process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET;
  };

  getHasuraGraphQLEndpoint = () => {
    return process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT;
  };

  getHasuraGraphQLWebsocketEndpoint = () => {
    return process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WEBSOCKET_ENDPOINT;
  };

  getFirebaseConfig = () => {
    return {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    };
  };

  getHasuraTokenKey = () => {
    return process.env.NEXT_PUBLIC_HASURA_TOKEN_KEY;
  };

  getFirebaseEmulator = () => {
    return Boolean(process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR);
  };

  getHasuraGraphQLJwtSecret = () => {
    return process.env.NEXT_PUBLIC_HASURA_GRAPHQL_JWT_SECRET;
  };

  getNodeEnv = () => {
    return process.env.NODE_ENV;
  };

  isDevelopment = () => {
    return this.getNodeEnv() === "development";
  };
}

export const env = new DotEnv();
