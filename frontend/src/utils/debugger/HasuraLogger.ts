import { env } from "@/env/dotEnv";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

export const HasuraLogger = {
  Messages: () => {
    if (env.getNodeEnv() === "development") {
      loadDevMessages();
      loadErrorMessages();
    }
  },
} as const;
