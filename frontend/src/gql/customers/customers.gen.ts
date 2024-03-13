import * as Types from "../../types/graphql.gen";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetCustomerQueryVariables = Types.Exact<{
  id: Types.Scalars["Float"]["input"];
}>;

export type GetCustomerQuery = {
  __typename?: "Query";
  getCustomer: {
    __typename?: "Customer";
    id: number;
    username: string;
    orders: Array<{ __typename?: "Order"; id: number; product: string }>;
  };
};

export const GetCustomerDocument = gql`
  query GetCustomer($id: Float!) {
    getCustomer(findCustomer: { id: $id }) {
      id
      username
      orders {
        id
        product
      }
    }
  }
`;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCustomerQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCustomerQuery,
    GetCustomerQueryVariables
  > &
    (
      | { variables: GetCustomerQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(
    GetCustomerDocument,
    options,
  );
}
export function useGetCustomerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerQuery,
    GetCustomerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(
    GetCustomerDocument,
    options,
  );
}
export function useGetCustomerSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCustomerQuery,
    GetCustomerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCustomerQuery, GetCustomerQueryVariables>(
    GetCustomerDocument,
    options,
  );
}
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<
  typeof useGetCustomerLazyQuery
>;
export type GetCustomerSuspenseQueryHookResult = ReturnType<
  typeof useGetCustomerSuspenseQuery
>;
export type GetCustomerQueryResult = Apollo.QueryResult<
  GetCustomerQuery,
  GetCustomerQueryVariables
>;
