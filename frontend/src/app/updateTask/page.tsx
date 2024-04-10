"use client";

import { UpdateTaskComponent } from "@/components/updateTaskComponent";
import { AppProvider } from "@/providers/AppProvider";

const UpdateTasks = () => {
  return (
    <main>
      <AppProvider>
        <UpdateTaskComponent />
        <p>変更</p>
      </AppProvider>
    </main>
  );
};

export default UpdateTasks;
