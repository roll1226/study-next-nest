"use client";

import { UpdateTaskComponent } from "@/components/updateTaskComponent";
import { useGetTaskByIdQuery } from "@/gql/tasks/tasks.gen";
import { Logger } from "@/utils/debugger/Logger";
import { useEffect } from "react";

const UpdateTasks = ({ params }: { params: { id: string } }) => {
  const taskId = Number(params.id);
  const { data, loading, error } = useGetTaskByIdQuery({
    variables: {
      id: taskId,
    },
  });

  useEffect(() => {
    if (!data || loading) return;
    Logger.debug("getTask", data.getTask);
  }, [data, loading]);

  return (
    <>
      {data?.getTask.name}
      <UpdateTaskComponent taskId={taskId} propName={data?.getTask.name!} />
      <b>変更</b>
    </>
  );
};

export default UpdateTasks;
