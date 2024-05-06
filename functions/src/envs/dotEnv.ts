import { DotEnvInterface } from "../interface/DotEnvInterface";
import { defineSecret, defineBoolean } from "firebase-functions/params";

/**
 * Firebase Functionsで使用する環境変数
 *
 * @class DotEnv
 * @implements {DotEnvInterface}
 */
class DotEnv implements DotEnvInterface {
  getHasuraGraphqlAdminSecret = () => {
    return defineSecret("FUNCTIONS_HASURA_GRAPHQL_ADMIN_SECRET").value();
  };

  getHasuraGraphqlEndpoint = () => {
    return defineSecret("FUNCTIONS_HASURA_GRAPHQL_ENDPOINT").value();
  };

  getHasuraGraphqlJwtSecret = () => {
    return defineSecret("FUNCTIONS_HASURA_GRAPHQL_JWT_SECRET").value();
  };

  isDevelopment = () => {
    return defineBoolean("FUNCTIONS_IS_DEVELOPMENT").value();
  };
}

export const env = new DotEnv();
