import { getApp, getApps, initializeApp } from "firebase/app";
import { env } from "@/env/dotEnv";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const isEmulator = () => {
  const useEmulator = env.getFirebaseEmulator();
  return !!(useEmulator && useEmulator);
};

const app = getApps().length
  ? getApp()
  : initializeApp(env.getFirebaseConfig());

const firebaseAuth = getAuth(app);
const firebaseFunction = getFunctions(app);
const analytics = getAnalytics(app);

if (isEmulator()) {
  connectAuthEmulator(firebaseAuth, "http://localhost:9099");
  connectFunctionsEmulator(firebaseFunction, "localhost", 5000);
}

export { firebaseAuth, firebaseFunction, analytics };
