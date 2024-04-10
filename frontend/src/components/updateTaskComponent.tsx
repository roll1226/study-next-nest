import { useUpdateTaskMutation } from "@/gql/tasks/tasks.gen";

export const UpdateTaskComponent = () => {
  const [updateTaskMutation] = useUpdateTaskMutation();

  const updateTask = () => {
    updateTaskMutation({
      variables: {
        id: 2,
        name: "テストUpdate",
      },
    });
  };

  return (
    <>
      <button type="button" onClick={updateTask}>
        変更
      </button>
    </>
  );
};
