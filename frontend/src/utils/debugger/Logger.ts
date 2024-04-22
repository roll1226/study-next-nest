import { env } from "@/env/dotEnv";

export const Logger = {
  debug: (message?: any, ...optionalParams: any[]) => {
    if (env.getNodeEnv() === "development") {
      console.log(message, optionalParams);
    }
  },

  table: (message?: any, ...optionalParams: any[]) => {
    if (env.getNodeEnv() === "development") {
      console.table(message, optionalParams);
    }
  },
} as const;
