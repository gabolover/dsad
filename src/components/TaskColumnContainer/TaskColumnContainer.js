import TaskColumn from "../TaskColum/TaskColumn";
import "./taskcolumncontainer.css";
import GET_STATUS from "../../graphql/getStatus";
import { useQuery } from "@apollo/client";

const TaskColumnContainer = () => {
  
  
  const { data, error, loading } = useQuery(GET_STATUS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... {error.message}</p>;
  const status = data.tasks.map((item) => item.status);
  const filteredStatus = status.filter((item, index) => {
    return status.indexOf(item) === index;
  });

  let i = 0;
  return (
    <div className="task-column-container">
      {filteredStatus.map((status) => (
        <TaskColumn status={status} key={`${status} ${i++}`} />
      ))}
    </div>
  );
};
export default TaskColumnContainer;
