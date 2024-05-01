import { env } from "@/env/dotEnv";
import { LocalStorages } from "@/utils/LocalStorages";

const authToken = LocalStorages.getAuthToken();
export const apolloClientHeader: Record<string, string> = authToken
  ? {
      Authorization: `Bearer ${authToken}`,
    }
  : {
      "x-hasura-admin-secret": `${env.getHasuraGraphQLAdminSecret()}`,
      "x-hasura-role": "anonymous",
    };
