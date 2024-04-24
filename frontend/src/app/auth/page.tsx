"use client";

import { useTrySignUp } from "@/hooks/auth/useTrySignUp";
import { FirebaseAuth } from "@/utils/lib/firebase/FirebaseAuth";
import { FC } from "react";

const AuthPage: FC = () => {
  const trySignUp = useTrySignUp({
    email: "test@examole.com",
    password: "password",
  });

  const signUp = () => {
    trySignUp();
  };

  const signIn = () => {
    FirebaseAuth.signInWithEmailAndPassword("test@examole.com", "password");
  };

  const signOut = () => {
    FirebaseAuth.signOut();
  };

  return (
    <div>
      <button type="button" onClick={signUp}>
        サインアップ
      </button>
      <br />
      <button type="button" onClick={signIn}>
        サインイン
      </button>
      <br />
      <button type="button" onClick={signOut}>
        サインアウト
      </button>
    </div>
  );
};

export default AuthPage;
