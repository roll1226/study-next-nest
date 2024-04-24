import { doc } from "firebase/firestore";
import { firebaseFirestore } from "./FirebaseInitialize";

export const FirebaseFirestore = {
  getAuthTokenRefreshDoc: (userId: string) => {
    return doc(firebaseFirestore, "user_meta", userId);
  },
} as const;
