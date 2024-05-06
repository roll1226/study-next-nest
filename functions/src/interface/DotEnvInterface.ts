export interface DotEnvInterface {
  getHasuraGraphqlAdminSecret: () => string;
  getHasuraGraphqlEndpoint: () => string;
  getHasuraGraphqlJwtSecret: () => string;
  isDevelopment: () => boolean;
}
