import * as Types from "../../types/graphql.gen";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetOrderQueryVariables = Types.Exact<{
  id: Types.Scalars["Float"]["input"];
}>;

export type GetOrderQuery = {
  __typename?: "Query";
  getOrder: {
    __typename?: "Order";
    id: number;
    product: string;
    customer: Array<{ __typename?: "Customer"; id: number; username: string }>;
  };
};

export const GetOrderDocument = gql`
  query GetOrder($id: Float!) {
    getOrder(findOrder: { id: $id }) {
      id
      product
      customer {
        id
        username
      }
    }
  }
`;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderQuery(
  baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables> &
    ({ variables: GetOrderQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(
    GetOrderDocument,
    options,
  );
}
export function useGetOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderQuery,
    GetOrderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(
    GetOrderDocument,
    options,
  );
}
export function useGetOrderSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetOrderQuery,
    GetOrderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetOrderQuery, GetOrderQueryVariables>(
    GetOrderDocument,
    options,
  );
}
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<
  typeof useGetOrderLazyQuery
>;
export type GetOrderSuspenseQueryHookResult = ReturnType<
  typeof useGetOrderSuspenseQuery
>;
export type GetOrderQueryResult = Apollo.QueryResult<
  GetOrderQuery,
  GetOrderQueryVariables
>;
