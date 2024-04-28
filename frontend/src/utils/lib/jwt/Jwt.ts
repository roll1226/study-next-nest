import { env } from "@/env/dotEnv";
import * as jwt from "jsonwebtoken";

// HACK: FIrebase Functionsに移す予定
export const Jwt = {
  /**
   * CloudのFirebaseを使用する場合はそのまま帰す\
   * Emulatorを使用している場合はエンコード・デコードを行う
   *
   * @param token string
   * @return string
   */
  getSignedToken: (token: string) => {
    if (!env.isDevelopment()) return token;

    return jwt.sign(
      jwt.decode(token) as string,
      env.getHasuraGraphQLJwtSecret()
    );
  },
} as const;
