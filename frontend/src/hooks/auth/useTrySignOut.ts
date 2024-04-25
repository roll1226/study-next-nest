import { FirebaseAuth } from "@/utils/lib/firebase/FirebaseAuth";

type UseTrySignOut = () => () => void;

export const useTrySignOut: UseTrySignOut = () => {
  const trySignOut = () => {
    FirebaseAuth.signOut();
  };

  return trySignOut;
};
