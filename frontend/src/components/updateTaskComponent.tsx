import { useUpdateTaskMutation } from "@/gql/tasks/tasks.gen";

export const UpdateTaskComponent = () => {
  const [updateTaskMutation] = useUpdateTaskMutation();

  const updateTask = () => {
    updateTaskMutation({
      variables: {
        id: 7,
        name: "テストUpdate8",
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
