import { useInsertTaskMutation } from "@/gql/tasks/tasks.gen";

export const TaskComponent = () => {
  const [InsertTaskMutation, { data, loading, error }] =
    useInsertTaskMutation();

  const addTask = () => {
    InsertTaskMutation({
      variables: {
        newTask: {
          name: "hge",
          customer_id: 1,
        },
      },
    });
  };

  return (
    <>
      <button type="button" onClick={addTask}>
        追加
      </button>
    </>
  );
};
