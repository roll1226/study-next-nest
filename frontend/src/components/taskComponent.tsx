import {
  useInsertTaskMutation,
  useRemoveTaskMutation,
} from "@/gql/tasks/tasks.gen";
import { useTaskSubscription } from "@/hooks/subscription/useTaskSubscription";
import { useAuthContext } from "@/providers/AuthProvider";
import { Logger } from "@/utils/debugger/Logger";
import { useState } from "react";

export const TaskComponent = () => {
  const [InsertTaskMutation] = useInsertTaskMutation();
  const [RemoveTaskMutation] = useRemoveTaskMutation();
  const { tasks, taskError, taskLoading } = useTaskSubscription();
  const { currentUser } = useAuthContext();

  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (!currentUser) return Logger.debug("未ログインです");

    InsertTaskMutation({
      variables: {
        name: taskName,
        customer_id: currentUser.uid,
      },
    });
  };

  const removeTask = (taskId: number) => {
    RemoveTaskMutation({
      variables: {
        task_id: taskId,
      },
      update(cache) {
        const normalizedId = cache.identify({
          id: taskId,
          __typename: "tasks",
        });
        cache.evict({ id: normalizedId });
        cache.gc();
      },
    });
  };

  return (
    <>
      <input
        type="text"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <br />
      <button type="button" onClick={addTask}>
        追加
      </button>
      <hr />
      {taskLoading ? (
        <p>Loading</p>
      ) : (
        tasks?.map((task) => {
          return (
            <p key={task.id}>
              {task.name}
              <button type="button" onClick={() => removeTask(task.id)}>
                削除
              </button>
            </p>
          );
        })
      )}
    </>
  );
};
