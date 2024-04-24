import { getApp, getApps, initializeApp } from "firebase/app";
import { env } from "@/env/dotEnv";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { Logger } from "@/utils/debugger/Logger";

const isEmulator = () => {
  const useEmulator = env.getFirebaseEmulator();
  return !!(useEmulator && useEmulator);
};

const app = initializeApp(env.getFirebaseConfig());

Logger.debug(env.getFirebaseConfig());
const firebaseAuth = getAuth(app);
const firebaseFunction = getFunctions(app);
const firebaseFirestore = getFirestore(app);
const firebaseStorage = getStorage(app);
// const analytics = getAnalytics(app);

if (isEmulator()) {
  connectAuthEmulator(firebaseAuth, "http://localhost:9099");
  connectFirestoreEmulator(firebaseFirestore, "localhost", 8000);
  connectStorageEmulator(firebaseStorage, "localhost", 9199);
  connectFunctionsEmulator(firebaseFunction, "localhost", 5001);
}

export {
  firebaseAuth,
  firebaseFunction,
  firebaseFirestore,
  firebaseStorage,
  // analytics,
};
