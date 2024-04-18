import {
  useGetTasksSubscriptionSubscription,
  useInsertTaskMutation,
} from "@/gql/tasks/tasks.gen";
import Logger from "@/utils/debugger/logger";
import { useEffect } from "react";

export const TaskComponent = () => {
  const [InsertTaskMutation] = useInsertTaskMutation();

  const { data, loading } = useGetTasksSubscriptionSubscription();

  const addTask = () => {
    InsertTaskMutation({
      variables: {
        name: "テスト１",
        customer_id: 1,
      },
    });
  };

  useEffect(() => {
    if (loading || !data) return;
    Logger.debug(data);
  }, [data, loading]);

  return (
    <>
      <button type="button" onClick={addTask}>
        追加
      </button>
      {/* {data.forEach((task) => {
        return <></>;
      })} */}
    </>
  );
};
