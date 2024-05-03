import { env } from "@/env/dotEnv";
import { FirebaseFunctions } from "../firebase/FirebaseFunctions";
import { Logger } from "@/utils/debugger/Logger";

// HACK: FIrebase Functionsに移す予定
export const Jwt = {
  /**
   * CloudのFirebaseを使用する場合はそのまま帰す\
   * Emulatorを使用している場合はエンコード・デコードを行う
   *
   * @param token string
   * @return string
   */
  getSignedToken: async (token: string) => {
    if (!env.isDevelopment()) return token;

    const res = await FirebaseFunctions.createJwtByEmulator(token);
    const { jwt } = res.data as { jwt: string };
    return jwt;
  },
} as const;
