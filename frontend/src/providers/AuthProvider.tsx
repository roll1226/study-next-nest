import React, {
  FC,
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { firebaseAuth } from "@/utils/lib/firebase/FirebaseInitialize";
import { LocalStorages } from "@/utils/LocalStorages";
import { env } from "@/env/dotEnv";
import { onSnapshot } from "firebase/firestore";
import { FirebaseFirestore } from "@/utils/lib/firebase/FirebaseFirestore";
import { Jwt } from "@/utils/lib/jwt/Jwt";

type AuthContextProps = {
  currentUser: User | null;
  loading: boolean;
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  loading: true,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, loading };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(firebaseAuth, async (user) => {
      setLoading(false);

      if (user === null) {
        firebaseAuth.signOut();
        LocalStorages.removeAuthToken();
        return;
      }

      setCurrentUser(user);

      const token = await user.getIdToken(true);
      const idTokenResult = await user.getIdTokenResult();
      const hasuraClaims = idTokenResult.claims[env.getHasuraTokenKey()];

      if (hasuraClaims)
        return LocalStorages.setAuthToken(Jwt.getSignedToken(token));

      onSnapshot(
        FirebaseFirestore.getAuthTokenRefreshDoc(user.uid),
        async (doc) => {
          const token = await user.getIdToken(true);
          LocalStorages.setAuthToken(Jwt.getSignedToken(token));
        }
      );
    });

    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser: value.currentUser, loading: value.loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
