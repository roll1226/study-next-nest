import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import axios from "axios";

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.beforeSignIn = functions.auth
//   .user()
//   .beforeSignIn(async (user, _context) => {
//     const customClaims = {
//       "https://hasura.io/jwt/claims": {
//         "x-hasura-default-role": "user",
//         "x-hasura-allowed-roles": ["user"],
//         "x-hasura-user-id": user.uid,
//       },
//     };

//     const operation = "contact";
//     const query = `
//       query contact($email: String) {
//         Contact(where: {
//           emailAddress: {_eq: $email},
//           state: {_eq: "Active"},
//           user: {state: {_eq: "Active"}}
//         }) {
//           contactId
//           emailAddress
//           user {
//             userId
//             userRoles(where: {role: {state: {_eq: "Active"}}}) {
//               companyId
//               role {
//                 role
//               }
//             }
//           }
//         }
//       }
//     `;
//     const variables = {
//       email: user.email,
//     };

//     const response = await axios.post(
//       "http://localhost:8080/v1/graphql",
//       {
//         operation,
//         query,
//         variables,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-hasura-admin-secret": "roll1226",
//         },
//       }
//     );

//     const result = response.data;
//     if (!result?.data?.Contact?.length) {
//       return;
//     }
//     const userInfo = result?.data?.Contact?.[0];
//     customClaims["https://hasura.io/jwt/claims"]["x-hasura-user-id"] =
//       userInfo.user.userId;
//     return admin.auth().setCustomUserClaims(user.uid, customClaims);
//   });

admin.initializeApp(functions.config().firebase);

// On sign up.
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
      admin.firestore().collection("user_meta").doc(user.uid).create({
        refreshTime: admin.firestore.FieldValue.serverTimestamp(),
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
