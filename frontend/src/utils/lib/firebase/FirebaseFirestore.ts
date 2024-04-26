import { doc } from "firebase/firestore";
import { firebaseFirestore } from "./FirebaseInitialize";

export const FirebaseFirestore = {
  /**
   * サインイン後、JWTを適切に取得するためのデータにアクセス
   *
   * @param userId string
   * @return getAuthTokenRefreshDoc: (userId: string) => DocumentReference<DocumentData, DocumentData>
   */
  getAuthTokenRefreshDoc: (userId: string) => {
    return doc(firebaseFirestore, "user_meta", userId);
  },
} as const;
