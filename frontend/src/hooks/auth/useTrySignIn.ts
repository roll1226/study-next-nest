import { Logger } from "@/utils/debugger/Logger";
import { FirebaseAuth } from "@/utils/lib/firebase/FirebaseAuth";

type UseTrySignIn = (arg: Record<"email" | "password", string>) => () => void;

export const useTrySignIn: UseTrySignIn = ({ email, password }) => {
  const trySignIn = () => {
    FirebaseAuth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      Logger.debug("Sign In User");
    });
  };

  return trySignIn;
};
