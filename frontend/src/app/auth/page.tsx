"use client";

import { useTrySignUp } from "@/hooks/auth/useTrySignUp";
import { FC } from "react";

const AuthPage: FC = () => {
  const trySignUp = useTrySignUp({
    email: "test@examole.com",
    password: "password",
  });

  const singUp = () => {
    trySignUp();
  };

  return (
    <>
      <button type="button" onClick={singUp}>
        サインイン
      </button>
    </>
  );
};

export default AuthPage;
