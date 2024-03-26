import * as Types from "../../types/graphql.gen";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type MyQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MyQueryQuery = {
  __typename?: "query_root";
  customers: Array<{ __typename?: "customers"; username: string | null }>;
};

export const MyQueryDocument = gql`
  query MyQuery {
    customers {
      username
    }
  }
`;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options,
  );
}
export function useMyQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyQueryQuery,
    MyQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options,
  );
}
export function useMyQuerySuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MyQueryQuery,
    MyQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options,
  );
}
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQuerySuspenseQueryHookResult = ReturnType<
  typeof useMyQuerySuspenseQuery
>;
export type MyQueryQueryResult = Apollo.QueryResult<
  MyQueryQuery,
  MyQueryQueryVariables
>;
