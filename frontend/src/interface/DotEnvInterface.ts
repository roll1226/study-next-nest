type firebaseConfigEnvType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

export interface DotEnvInterface {
  getHasuraGraphQLAdminSecret: () => string;
  getHasuraGraphQLEndpoint: () => string;
  getHasuraGraphQLWebsocketEndpoint: () => string;
  getFirebaseConfig: () => firebaseConfigEnvType;
  getHasuraTokenKey: () => string;
  getFirebaseEmulator: () => boolean;
  getHasuraGraphQLJwtSecret: () => string;
  getNodeEnv: () => "development" | "production" | "test";
  isDevelopment: () => boolean;
}
