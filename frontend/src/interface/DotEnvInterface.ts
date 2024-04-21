type firebaseEnvType = {
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
  getFirebaseEnv: () => firebaseEnvType;
  getNodeEnv: () => "development" | "production" | "test";
}
