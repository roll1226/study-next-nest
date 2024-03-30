import * as Types from "../../types/graphql.gen";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetCustomerByIdQueryVariables = Types.Exact<{
  id: Types.Scalars["Float"]["input"];
}>;

export type GetCustomerByIdQuery = {
  __typename?: "query_root";
  getCustomer: {
    __typename?: "Customer";
    username: string;
    tasks: Array<{ __typename?: "Task"; name: string }>;
  };
};

export type GetCustomersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetCustomersQuery = {
  __typename?: "query_root";
  customers: Array<{
    __typename?: "customers";
    username: string;
    tasks: Array<{ __typename?: "tasks"; name: string }>;
  }>;
};

export const GetCustomerByIdDocument = gql`
  query GetCustomerById($id: Float!) {
    getCustomer(customerId: $id) {
      username
      tasks {
        name
      }
    }
  }
`;

/**
 * __useGetCustomerByIdQuery__
 *
 * To run a query within a React component, call `useGetCustomerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCustomerByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCustomerByIdQuery,
    GetCustomerByIdQueryVariables
  > &
    (
      | { variables: GetCustomerByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(
    GetCustomerByIdDocument,
    options,
  );
}
export function useGetCustomerByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerByIdQuery,
    GetCustomerByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCustomerByIdQuery,
    GetCustomerByIdQueryVariables
  >(GetCustomerByIdDocument, options);
}
export function useGetCustomerByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCustomerByIdQuery,
    GetCustomerByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCustomerByIdQuery,
    GetCustomerByIdQueryVariables
  >(GetCustomerByIdDocument, options);
}
export type GetCustomerByIdQueryHookResult = ReturnType<
  typeof useGetCustomerByIdQuery
>;
export type GetCustomerByIdLazyQueryHookResult = ReturnType<
  typeof useGetCustomerByIdLazyQuery
>;
export type GetCustomerByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetCustomerByIdSuspenseQuery
>;
export type GetCustomerByIdQueryResult = Apollo.QueryResult<
  GetCustomerByIdQuery,
  GetCustomerByIdQueryVariables
>;
export const GetCustomersDocument = gql`
  query GetCustomers {
    customers {
      username
      tasks {
        name
      }
    }
  }
`;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomersQuery,
    GetCustomersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(
    GetCustomersDocument,
    options,
  );
}
export function useGetCustomersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomersQuery,
    GetCustomersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(
    GetCustomersDocument,
    options,
  );
}
export function useGetCustomersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCustomersQuery,
    GetCustomersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCustomersQuery, GetCustomersQueryVariables>(
    GetCustomersDocument,
    options,
  );
}
export type GetCustomersQueryHookResult = ReturnType<
  typeof useGetCustomersQuery
>;
export type GetCustomersLazyQueryHookResult = ReturnType<
  typeof useGetCustomersLazyQuery
>;
export type GetCustomersSuspenseQueryHookResult = ReturnType<
  typeof useGetCustomersSuspenseQuery
>;
export type GetCustomersQueryResult = Apollo.QueryResult<
  GetCustomersQuery,
  GetCustomersQueryVariables
>;
