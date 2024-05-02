import createAuthAttachJwt from "./auth/createAuthAttachJwt"; // 追記
import * as admin from "firebase-admin";

admin.initializeApp();

module.exports = {
  createAuthAttachJwt,
};
