import Card from "../Card/Card";
import "./taskcolumn.css";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import GET_TASK_CARD from "../../graphql/getTaskCard";

const NUMBER_ARRAY = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
};

const TaskColumn = ({ status }) => {
  const { data, error, loading } = useQuery(GET_TASK_CARD, {
    variables: { status },
  });
  if (loading) return <p>loading</p>;
  if (error) return <p>error... {error.message}</p>;

  const result = data.tasks;

  return (
    <div className="task-column">
      <div className="project-info body--l">
        <p>
          {status} (0{result.length})
        </p>
      </div>
      {result.map((item) => (
        <Card
          title={item.name}
          key={item.name}
          tags={item.tags}
          avatar={item.assignee.avatar}
          time={item.dueDate}
          points={NUMBER_ARRAY[`${item.pointEstimate}`]}
        />
      ))}
    </div>
  );
};

export default TaskColumn;
