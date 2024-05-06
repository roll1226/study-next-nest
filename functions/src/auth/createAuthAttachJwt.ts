import * as admin from "firebase-admin";
import { auth } from "firebase-functions/v1";
import { Timestamp } from "firebase-admin/firestore";
import axios from "axios";
import { env } from "../envs/dotEnv";

const query = `
  mutation InsertCustomer($id: String!, $email: String!, $username: String!) {
    insert_customers(objects: {id: $id, email: $email, username: $username}) {
      returning {
        id
        email
        created_at
      }
    }
  }
`;

export default auth.user().onCreate(async (user) => {
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "customer",
      "x-hasura-allowed-roles": ["customer", "anonymous"],
      "x-hasura-user-id": user.uid,
    },
  };

  return await admin
    .auth()
    .setCustomUserClaims(user.uid, customClaims)
    .then(async () => {
      const variables = {
        id: user.uid,
        email: user.email,
        username: "test",
      };

      await axios
        .post(
          env.getHasuraGraphqlEndpoint(),
          {
            operationName: "InsertCustomer",
            query,
            variables,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-hasura-admin-secret": env.getHasuraGraphqlAdminSecret(),
            },
          }
        )
        .catch((err) => {
          console.error("success");
          console.log(err);
        });

      // NOTE:クレーム情報の設定に遅延がある時のためにmetaデータをFirestoreで管理
      await admin.firestore().collection("user_meta").doc(user.uid).create({
        refreshTime: Timestamp.now(),
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
