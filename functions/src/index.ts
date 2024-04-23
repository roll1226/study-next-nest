import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Timestamp } from "firebase-admin/firestore";
import axios from "axios";

admin.initializeApp();

exports.processSignUp = functions.auth.user().onCreate((user) => {
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "customer",
      "x-hasura-allowed-roles": ["customer"],
      "x-hasura-user-id": user.uid,
    },
  };

  return admin
    .auth()
    .setCustomUserClaims(user.uid, customClaims)
    .then(() => {
      const query = `
        mutation InsertCustomer($id: String!, $email: String!, $username: String!) {
          insert_customers(objects: {id: $id, email: $email, username: $username}) {
            returning {
              id
              email,
              created_at
            }
          }
        }
      `;
      const variables = {
        id: user.uid,
        email: user.email,
        username: "test",
      };

      axios
        .post(
          "http://localhost:8080/v1/graphql",
          {
            operationName: "InsertCustomer",
            query,
            variables,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-hasura-admin-secret": "roll1226",
            },
          }
        )
        .then((res) => {
          console.info("success");
          console.log(res);
        })
        .catch((err) => {
          console.error("success");
          console.log(err);
        });

      admin.firestore().collection("user_meta").doc(user.uid).create({
        refreshTime: Timestamp.now(),
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
