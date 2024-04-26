import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "./FirebaseInitialize";

export const FirebaseAuth = {
  /**
   * 新規アカウント作成(email, passwordで)
   *
   * @param email string
   * @param password string
   * @return createUserWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>
   */
  createUserWithEmailAndPassword: (email: string, password: string) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  },

  /**
   * アカウントサインイン(email, passwordで)
   *
   * @param email string
   * @param password string
   * @return signInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>
   */
  signInWithEmailAndPassword: (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  },

  /**
   * サインアウト
   *
   * @return signOut: () => Promise<void
   */
  signOut: () => {
    return signOut(firebaseAuth);
  },
} as const;
