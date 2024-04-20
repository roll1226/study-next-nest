import {
  useInsertTaskMutation,
  useRemoveTaskMutation,
} from "@/gql/tasks/tasks.gen";
import { useTaskSubscription } from "@/hooks/subscription/useTaskSubscription";
import { useState } from "react";

export const TaskComponent = () => {
  const [InsertTaskMutation] = useInsertTaskMutation();
  const [RemoveTaskMutation] = useRemoveTaskMutation();
  const { tasks, taskError, taskLoading } = useTaskSubscription();

  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    InsertTaskMutation({
      variables: {
        name: taskName,
        customer_id: 1,
      },
    });
  };

  const removeTask = ($taskId: number) => {
    RemoveTaskMutation({
      variables: {
        task_id: $taskId,
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
