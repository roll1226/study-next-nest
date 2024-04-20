import * as Types from "../../types/graphql.gen";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetTaskByIdQueryVariables = Types.Exact<{
  id: Types.Scalars["Float"]["input"];
}>;

export type GetTaskByIdQuery = {
  __typename?: "query_root";
  getTask: {
    __typename?: "Task";
    name: string;
    customer: { __typename?: "Customer"; username: string };
  };
};

export type GetTasksQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetTasksQuery = {
  __typename?: "query_root";
  tasks: Array<{
    __typename?: "tasks";
    name: string;
    customer: { __typename?: "customers"; username: string } | null;
  }>;
};

export type GetTasksSubscriptionSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetTasksSubscriptionSubscription = {
  __typename?: "subscription_root";
  tasks: Array<{ __typename?: "tasks"; id: number; name: string }>;
};

export type InsertTaskMutationVariables = Types.Exact<{
  name: Types.Scalars["String"]["input"];
  customer_id: Types.Scalars["Int"]["input"];
}>;

export type InsertTaskMutation = {
  __typename?: "mutation_root";
  insert_tasks_one: {
    __typename?: "tasks";
    id: number;
    name: string;
    customer: { __typename?: "customers"; username: string } | null;
  } | null;
};

export type RemoveTaskMutationVariables = Types.Exact<{
  task_id: Types.Scalars["Int"]["input"];
}>;

export type RemoveTaskMutation = {
  __typename?: "mutation_root";
  delete_tasks: {
    __typename?: "tasks_mutation_response";
    affected_rows: number;
  } | null;
};

export type UpdateTaskMutationVariables = Types.Exact<{
  id: Types.Scalars["Int"]["input"];
  name: Types.Scalars["String"]["input"];
}>;

export type UpdateTaskMutation = {
  __typename?: "mutation_root";
  update_tasks_by_pk: { __typename?: "tasks"; id: number; name: string } | null;
};

export const GetTaskByIdDocument = gql`
  query GetTaskById($id: Float!) {
    getTask(taskId: $id) {
      name
      customer {
        username
      }
    }
  }
`;

/**
 * __useGetTaskByIdQuery__
 *
 * To run a query within a React component, call `useGetTaskByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaskByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTaskByIdQuery,
    GetTaskByIdQueryVariables
  > &
    (
      | { variables: GetTaskByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTaskByIdQuery, GetTaskByIdQueryVariables>(
    GetTaskByIdDocument,
    options,
  );
}
export function useGetTaskByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTaskByIdQuery,
    GetTaskByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTaskByIdQuery, GetTaskByIdQueryVariables>(
    GetTaskByIdDocument,
    options,
  );
}
export function useGetTaskByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetTaskByIdQuery,
    GetTaskByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTaskByIdQuery, GetTaskByIdQueryVariables>(
    GetTaskByIdDocument,
    options,
  );
}
export type GetTaskByIdQueryHookResult = ReturnType<typeof useGetTaskByIdQuery>;
export type GetTaskByIdLazyQueryHookResult = ReturnType<
  typeof useGetTaskByIdLazyQuery
>;
export type GetTaskByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetTaskByIdSuspenseQuery
>;
export type GetTaskByIdQueryResult = Apollo.QueryResult<
  GetTaskByIdQuery,
  GetTaskByIdQueryVariables
>;
export const GetTasksDocument = gql`
  query GetTasks {
    tasks {
      name
      customer {
        username
      }
    }
  }
`;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(
    GetTasksDocument,
    options,
  );
}
export function useGetTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTasksQuery,
    GetTasksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(
    GetTasksDocument,
    options,
  );
}
export function useGetTasksSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetTasksQuery,
    GetTasksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTasksQuery, GetTasksQueryVariables>(
    GetTasksDocument,
    options,
  );
}
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<
  typeof useGetTasksLazyQuery
>;
export type GetTasksSuspenseQueryHookResult = ReturnType<
  typeof useGetTasksSuspenseQuery
>;
export type GetTasksQueryResult = Apollo.QueryResult<
  GetTasksQuery,
  GetTasksQueryVariables
>;
export const GetTasksSubscriptionDocument = gql`
  subscription GetTasksSubscription {
    tasks {
      id
      name
    }
  }
`;

/**
 * __useGetTasksSubscriptionSubscription__
 *
 * To run a query within a React component, call `useGetTasksSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksSubscriptionSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetTasksSubscriptionSubscription,
    GetTasksSubscriptionSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetTasksSubscriptionSubscription,
    GetTasksSubscriptionSubscriptionVariables
  >(GetTasksSubscriptionDocument, options);
}
export type GetTasksSubscriptionSubscriptionHookResult = ReturnType<
  typeof useGetTasksSubscriptionSubscription
>;
export type GetTasksSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<GetTasksSubscriptionSubscription>;
export const InsertTaskDocument = gql`
  mutation InsertTask($name: String!, $customer_id: Int!) {
    insert_tasks_one(object: { name: $name, customer_id: $customer_id }) {
      id
      name
      customer {
        username
      }
    }
  }
`;
export type InsertTaskMutationFn = Apollo.MutationFunction<
  InsertTaskMutation,
  InsertTaskMutationVariables
>;

/**
 * __useInsertTaskMutation__
 *
 * To run a mutation, you first call `useInsertTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTaskMutation, { data, loading, error }] = useInsertTaskMutation({
 *   variables: {
 *      name: // value for 'name'
 *      customer_id: // value for 'customer_id'
 *   },
 * });
 */
export function useInsertTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertTaskMutation,
    InsertTaskMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertTaskMutation, InsertTaskMutationVariables>(
    InsertTaskDocument,
    options,
  );
}
export type InsertTaskMutationHookResult = ReturnType<
  typeof useInsertTaskMutation
>;
export type InsertTaskMutationResult =
  Apollo.MutationResult<InsertTaskMutation>;
export type InsertTaskMutationOptions = Apollo.BaseMutationOptions<
  InsertTaskMutation,
  InsertTaskMutationVariables
>;
export const RemoveTaskDocument = gql`
  mutation RemoveTask($task_id: Int!) {
    delete_tasks(where: { id: { _eq: $task_id } }) {
      affected_rows
    }
  }
`;
export type RemoveTaskMutationFn = Apollo.MutationFunction<
  RemoveTaskMutation,
  RemoveTaskMutationVariables
>;

/**
 * __useRemoveTaskMutation__
 *
 * To run a mutation, you first call `useRemoveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTaskMutation, { data, loading, error }] = useRemoveTaskMutation({
 *   variables: {
 *      task_id: // value for 'task_id'
 *   },
 * });
 */
export function useRemoveTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveTaskMutation,
    RemoveTaskMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveTaskMutation, RemoveTaskMutationVariables>(
    RemoveTaskDocument,
    options,
  );
}
export type RemoveTaskMutationHookResult = ReturnType<
  typeof useRemoveTaskMutation
>;
export type RemoveTaskMutationResult =
  Apollo.MutationResult<RemoveTaskMutation>;
export type RemoveTaskMutationOptions = Apollo.BaseMutationOptions<
  RemoveTaskMutation,
  RemoveTaskMutationVariables
>;
export const UpdateTaskDocument = gql`
  mutation UpdateTask($id: Int!, $name: String!) {
    update_tasks_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, updated_at: now }
    ) {
      id
      name
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTaskMutation,
    UpdateTaskMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
    UpdateTaskDocument,
    options,
  );
}
export type UpdateTaskMutationHookResult = ReturnType<
  typeof useUpdateTaskMutation
>;
export type UpdateTaskMutationResult =
  Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
