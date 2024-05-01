import { Logger } from "@/utils/debugger/Logger";
import { FirebaseAuth } from "@/utils/lib/firebase/FirebaseAuth";

type UseTrySignOut = () => () => void;

export const useTrySignOut: UseTrySignOut = () => {
  const trySignOut = () => {
    FirebaseAuth.signOut();
    Logger.debug("Sign Out User");
  };

  return trySignOut;
};
