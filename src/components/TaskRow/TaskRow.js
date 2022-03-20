import TaskTableRow from "../TaskTableRow/TaskTableRow";
import TaskCell from "../TaskCell/TaskCell";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import GET_TASK_CARD from "../../graphql/getTaskCard";
import "./taskrow.css";
import { NUMBER_ARRAY } from "../TaskColum/TaskColumn";

const TaskRow = ({ status }) => {
  const { data, error, loading } = useQuery(GET_TASK_CARD, {
    variables: { status },
  });
  if (loading) return <p>loading</p>;
  if (error) return <p>error... {error.message}</p>;

  const result = data.tasks;
  return (
    <div className="taskRow">
      <TaskCell status={status} quantity={result.length} />
      {result.map((item, index) => (
        <TaskTableRow
          title={item.name}
          order={++index}
          points={NUMBER_ARRAY[`${item.pointEstimate}`]}
          assignee={item.assignee}
          time={item.dueDate}
          key={item.name}
          tags={item.tags}
        />
      ))}
    </div>
  );
};

export default TaskRow;
