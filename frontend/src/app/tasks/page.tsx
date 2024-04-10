"use client";

import { TaskComponent } from "@/components/taskComponent";
import { AppProvider } from "@/providers/AppProvider";

const Tasks = () => {
  return (
    <main>
      <AppProvider>
        <TaskComponent />
        <div>追加</div>
      </AppProvider>
    </main>
  );
};

export default Tasks;
