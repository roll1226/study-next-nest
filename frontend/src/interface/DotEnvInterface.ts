export interface DotEnvInterface {
  getHasuraGraphQLAdminSecret: () => string;
  getHasuraGraphQLEndpoint: () => string;
  getHasuraGraphQLWebsocketEndpoint: () => string;
  getNodeEnv: () => "development" | "production" | "test";
}
