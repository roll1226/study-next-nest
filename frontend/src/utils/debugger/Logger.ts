import { env } from "@/env/dotEnv";

export default class Logger {
  static debug(message?: any, ...optionalParams: any[]) {
    if (env.getNodeEnv() === "development") {
      console.log(message, optionalParams);
    }
  }

  static table(message?: any, ...optionalParams: any[]) {
    if (env.getNodeEnv() === "development") {
      console.table(message, optionalParams);
    }
  }
}
