"use client";

import { UpdateTaskComponent } from "@/components/updateTaskComponent";
import { AppProvider } from "@/providers/AppProvider";

const UpdateTasks = () => {
  return (
    <>
      <UpdateTaskComponent />
      <p>変更</p>
    </>
  );
};

export default UpdateTasks;
