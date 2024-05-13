import { useUpdateTaskMutation } from "@/gql/tasks/tasks.gen";
import { FCX, useEffect, useState } from "react";

type Props = {
  taskId: number;
  propName: string;
};

export const UpdateTaskComponent: FCX<Props> = ({
  className,
  taskId,
  propName = "",
}) => {
  const [name, setName] = useState<string>("");
  const [updateTaskMutation] = useUpdateTaskMutation();

  const updateTask = () => {
    updateTaskMutation({
      variables: {
        id: taskId,
        name,
      },
    });
  };

  useEffect(() => {
    setName(propName);
  }, [propName]);

  return (
    <div className={className}>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button type="button" onClick={updateTask}>
        変更
      </button>
    </div>
  );
};
