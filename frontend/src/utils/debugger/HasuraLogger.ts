import { env } from "@/env/dotEnv";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

export default class HasuraLogger {
  static Messages() {
    if (env.getNodeEnv() === "development") {
      loadDevMessages();
      loadErrorMessages();
    }
  }
}
