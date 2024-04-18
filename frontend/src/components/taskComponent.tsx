import { useInsertTaskMutation } from "@/gql/tasks/tasks.gen";
import { useTaskSubscription } from "@/hooks/subscription/useTaskSubscription";

export const TaskComponent = () => {
  const [InsertTaskMutation] = useInsertTaskMutation();

  const { tasks, taskError, taskLoading } = useTaskSubscription();

  const addTask = () => {
    InsertTaskMutation({
      variables: {
        name: "テスト5",
        customer_id: 1,
      },
    });
  };

  return (
    <>
      <button type="button" onClick={addTask}>
        追加
      </button>
      {taskLoading ? (
        <p>Loading</p>
      ) : (
        tasks?.map((task) => {
          return <p key={task.id}>{task.name}</p>;
        })
      )}
    </>
  );
};
