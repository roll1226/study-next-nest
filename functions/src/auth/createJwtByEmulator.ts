import * as jwt from "jsonwebtoken";
import { defineSecret } from "firebase-functions/params";
import * as functions from "firebase-functions";

const hasuraGraphqlJwtSecret = defineSecret("HASURA_GRAPHQL_JWT_SECRET");
export default functions
  .region("asia-northeast1")
  .https.onCall((data, context): { jwt: string } => {
    console.log(context.rawRequest.body.data.authToken);
    const { authToken } = data;

    if (!context.auth) {
      throw new functions.https.HttpsError("unauthenticated", "Auth jwt error");
    }

    return {
      jwt: jwt.sign(
        jwt.decode(authToken) as string,
        hasuraGraphqlJwtSecret.value()
      ),
    };
  });
