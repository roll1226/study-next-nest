import {
  GetTasksSubscriptionSubscription,
  useGetTasksSubscriptionSubscription,
} from "@/gql/tasks/tasks.gen";
import Logger from "@/utils/debugger/Logger";
import { ApolloError } from "@apollo/client";
import { useEffect, useState } from "react";

type UseTaskSubscription = {
  tasks: GetTasksSubscriptionSubscription["tasks"] | undefined;
  taskLoading: boolean;
  taskError: ApolloError | undefined;
};

export const useTaskSubscription = (): UseTaskSubscription => {
  const [tasks, setTasks] =
    useState<GetTasksSubscriptionSubscription["tasks"]>();

  const { data, loading, error } = useGetTasksSubscriptionSubscription();

  useEffect(() => {
    if (!data || loading) return;

    Logger.debug(data.tasks);
    setTasks([...data.tasks]);
  }, [data, loading]);

  return { tasks, taskLoading: loading, taskError: error };
};
