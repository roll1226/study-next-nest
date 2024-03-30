import { client } from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { FC, ReactNode } from "react";

type Props = { children: ReactNode };

export const AppProvider: FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
