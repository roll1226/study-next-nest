"use client";

import { UpdateTaskComponent } from "@/components/updateTaskComponent";
import { useGetTaskByIdQuery } from "@/gql/tasks/tasks.gen";
import { Logger } from "@/utils/debugger/Logger";
import { useEffect } from "react";

const UpdateTasks = ({ params }: { params: { id: string } }) => {
  const { data, loading, error } = useGetTaskByIdQuery({
    variables: {
      id: Number(params.id),
    },
  });

  useEffect(() => {
    if (!data || loading) return;
    Logger.debug("getTask", data.getTask);
  }, [data, loading]);

  return (
    <>
      <UpdateTaskComponent />
      <p>変更</p>
    </>
  );
};

export default UpdateTasks;
