import * as jwt from "jsonwebtoken";
import * as functions from "firebase-functions";
import { env } from "../envs/dotEnv";

export default functions
  .region("asia-northeast1")
  .https.onCall((data, context): { jwt: string } => {
    const { authToken } = data;

    if (!context.auth) {
      throw new functions.https.HttpsError("unauthenticated", "Auth jwt error");
    }

    return {
      jwt: jwt.sign(
        jwt.decode(authToken) as string,
        env.getHasuraGraphqlJwtSecret()
      ),
    };
  });
