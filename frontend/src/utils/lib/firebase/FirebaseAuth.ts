import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "./FirebaseInitialize";

export const FirebaseAuth = {
  createUserWithEmailAndPassword: (email: string, password: string) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  },

  signInWithEmailAndPassword: (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  },

  signOut: () => {
    return signOut(firebaseAuth);
  },
} as const;
