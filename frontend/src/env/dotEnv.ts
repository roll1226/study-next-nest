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

  getNodeEnv = () => {
    return process.env.NODE_ENV;
  };
}

export const env = new DotEnv();
