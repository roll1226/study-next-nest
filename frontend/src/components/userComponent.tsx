"use client";

import { useGetCustomersQuery } from "@/gql/customers/customers.gen";
import { useEffect } from "react";

export const UserComponent = () => {
  const { data, loading, error } = useGetCustomersQuery();

  useEffect(() => {
    if (!loading) console.log(data);
  }, [data, loading]);

  return <>GetUser</>;
};
