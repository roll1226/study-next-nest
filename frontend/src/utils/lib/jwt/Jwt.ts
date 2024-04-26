import { env } from "@/env/dotEnv";
import { Logger } from "@/utils/debugger/Logger";
import * as jwt from "jsonwebtoken";

// CHANGE: FIrebase Functionsに移す予定
export const Jwt = {
  /**
   * Firebase Emulator起動時のみ使用する
   *
   * @param token string
   * @return string
   */
  getEmulatedSignedToken: (token: string) => {
    return jwt.sign(
      jwt.decode(token) as string,
      env.getHasuraGraphQLJwtSecret()
    );
  },
} as const;
