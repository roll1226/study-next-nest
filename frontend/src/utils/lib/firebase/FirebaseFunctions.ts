import { httpsCallable } from "firebase/functions";
import { firebaseFunctions } from "./FirebaseInitialize";

export const FirebaseFunctions = {
  createJwtByEmulator: (authToken: string) => {
    const createJwtByEmulator = httpsCallable(
      firebaseFunctions,
      "createJwtByEmulator"
    );
    return createJwtByEmulator({ authToken });
  },
} as const;
