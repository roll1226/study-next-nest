"use client";

import { useGetCustomersQuery } from "@/gql/customers/customers.gen";
import { Logger } from "@/utils/debugger/Logger";
import { useEffect } from "react";

export const UserComponent = () => {
  const { data, loading, error } = useGetCustomersQuery();

  useEffect(() => {
    if (!loading) Logger.debug(data);
  }, [data, loading]);

  return <>GetUser</>;
};
