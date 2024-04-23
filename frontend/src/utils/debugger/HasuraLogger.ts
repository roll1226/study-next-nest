import { env } from "@/env/dotEnv";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

export const HasuraLogger = {
  Messages: () => {
    if (env.isDevelopment()) {
      loadDevMessages();
      loadErrorMessages();
    }
  },
} as const;
