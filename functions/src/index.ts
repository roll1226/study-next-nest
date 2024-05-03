import * as admin from "firebase-admin";
import createAuthAttachJwt from "./auth/createAuthAttachJwt";
import createJwtByEmulator from "./auth/createJwtByEmulator";

admin.initializeApp();

module.exports = {
  createAuthAttachJwt,
  createJwtByEmulator,
};
