"use client";

import { useTrySignIn } from "@/hooks/auth/useTrySignIn";
import { useTrySignOut } from "@/hooks/auth/useTrySignOut";
import { useTrySignUp } from "@/hooks/auth/useTrySignUp";
import { FC } from "react";

const AuthPage: FC = () => {
  const trySignUp = useTrySignUp({
    email: "test1@examole.com",
    password: "password",
  });

  const trySignIn = useTrySignIn({
    email: "test1@examole.com",
    password: "password",
  });

  const trySignOut = useTrySignOut();

  const signUp = () => {
    trySignUp();
  };

  const signOut = () => {
    trySignOut();
  };

  return (
    <div>
      <button type="button" onClick={signUp}>
        サインアップ
      </button>
      <br />
      <button type="button" onClick={trySignIn}>
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
