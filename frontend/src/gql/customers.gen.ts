import * as Types from "../types/graphql.gen";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type getCustomerQueryVariables = Types.Exact<{
  id: Types.Scalars["Float"]["input"];
}>;

export type getCustomerQuery = {
  __typename?: "Query";
  getCustomer: { __typename?: "Customer"; id: number; username: string };
};

export const getCustomerDocument = gql`
  query getCustomer($id: Float!) {
    getCustomer(findCustomer: { id: $id }) {
      id
      username
    }
  }
`;

/**
 * __usegetCustomerQuery__
 *
 * To run a query within a React component, call `usegetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `usegetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usegetCustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usegetCustomerQuery(
  baseOptions: Apollo.QueryHookOptions<
    getCustomerQuery,
    getCustomerQueryVariables
  > &
    (
      | { variables: getCustomerQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<getCustomerQuery, getCustomerQueryVariables>(
    getCustomerDocument,
    options,
  );
}
export function usegetCustomerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    getCustomerQuery,
    getCustomerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<getCustomerQuery, getCustomerQueryVariables>(
    getCustomerDocument,
    options,
  );
}
export function usegetCustomerSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    getCustomerQuery,
    getCustomerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<getCustomerQuery, getCustomerQueryVariables>(
    getCustomerDocument,
    options,
  );
}
export type getCustomerQueryHookResult = ReturnType<typeof usegetCustomerQuery>;
export type getCustomerLazyQueryHookResult = ReturnType<
  typeof usegetCustomerLazyQuery
>;
export type getCustomerSuspenseQueryHookResult = ReturnType<
  typeof usegetCustomerSuspenseQuery
>;
export type getCustomerQueryResult = Apollo.QueryResult<
  getCustomerQuery,
  getCustomerQueryVariables
>;
