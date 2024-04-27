import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Timestamp } from "firebase-admin/firestore"; // eslint-disable-line
import axios from "axios";
import { defineSecret } from "firebase-functions/params";

admin.initializeApp();

const hasuraGraphqlEndpoint = defineSecret("HASURA_GRAPHQL_ENDPOINT");
const hasuraGraphqlAdminSecret = defineSecret("HASURA_GRAPHQL_ADMIN_SECRET");

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

exports.processSignUp = functions.auth.user().onCreate((user) => {
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "customer",
      "x-hasura-allowed-roles": ["customer", "anonymous"],
      "x-hasura-user-id": user.uid,
    },
  };

  return admin
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
          hasuraGraphqlEndpoint.value(),
          {
            operationName: "InsertCustomer",
            query,
            variables,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-hasura-admin-secret": hasuraGraphqlAdminSecret.value(),
            },
          }
        )
        .catch((err) => {
          console.error("success");
          console.log(err);
        });

      await admin.firestore().collection("user_meta").doc(user.uid).create({
        refreshTime: Timestamp.now(),
      });
      return;
    })
    .catch((error) => {
      console.log(error);
    });
});
