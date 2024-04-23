import { FIREBASE_ERROR_TYPE } from "@/consts/firebaseError";
import { LocalStorages } from "@/utils/LocalStorages";
import { Logger } from "@/utils/debugger/Logger";
import { FirebaseAuth } from "@/utils/lib/firebase/FirebaseAuth";

type UseTrySignUp = (arg: Record<"email" | "password", string>) => () => void;

export const useTrySignUp: UseTrySignUp = ({ email, password }) => {
  const trySignUp = () => {
    FirebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        const authToken = await result.user.getIdToken(true);
        LocalStorages.setAuthToken(authToken);
        Logger.debug(authToken);
        Logger.debug("add User In Firebase Auth");
      })
      .catch((err) => {
        Logger.debug(err);
        switch (err.code) {
          case FIREBASE_ERROR_TYPE.AUTH_EMAIL_ALREADY_IN_USE:
            Logger.debug("既に登録済みメールアドレス");
            break;

          default:
            break;
        }
      });
  };

  return trySignUp;
};
