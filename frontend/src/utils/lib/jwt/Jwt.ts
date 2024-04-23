import { env } from "@/env/dotEnv";
import sign from "jwt-encode";
import { decodeToken } from "react-jwt";

export const Jwt = {
  getEmulatedSignedToken: (token: string) => {
    return sign(decodeToken(token), env.getHasuraGraphQLAdminSecret());
  },
} as const;
