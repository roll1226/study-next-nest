"use client";

import { client } from "@/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { FC, ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";

type Props = { children: ReactNode };

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>{children}</AuthProvider>
    </ApolloProvider>
  );
};
