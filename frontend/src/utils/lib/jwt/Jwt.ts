import { Logger } from "@/utils/debugger/Logger";
import * as jwt from "jsonwebtoken";

// FIrebase Functionsに移す予定
export const Jwt = {
  getEmulatedSignedToken: (token: string) => {
    return jwt.sign(
      jwt.decode(token) as string,
      "hasura_graphql_admin_secret_roll1226"
    );
  },
} as const;
