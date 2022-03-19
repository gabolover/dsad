import TaskNameCell from "../TaskNameCell/TaskNameCell";
import TaskCell from "../TaskCell/TaskCell";
import "./tasktablerow.css";
import "../TaskBarCell/taskbarcell.css";
import moment from "moment";
import { nowDate } from "../../App";

const TaskTableRow = ({ title, order, points, assignee, time }) => {
  let timeTask = time.split("T");
  timeTask.splice(1);
  let date = moment(timeTask.toString());
  let dateTask = date.format("D MMMM, YYYY");
  let now = nowDate.format();

  const dateCard = () => {
    if (date.diff(now, "days") === 0) {
      if (date.diff(now, "hours") > 0) return "less";
      return "onTime";
    } else if (date.diff(now, "days") > 0 && date.diff(now, "days") <= 2) {
      return "less";
    } else {
      console.log(date.diff(now, "days"));
      if (date.diff(now, "days") > 2) return "onTime";
      return "late";
    }
  };

  const dateNow = () => {
    if (date.diff(now, "days") === 0) {
      if (date.diff(now, "hours") > 0) return dateTask;
      return (dateTask = "Today");
    } else if (date.diff(now, "days") === -1) {
      return (dateTask = "Yesterday");
    }
    return dateTask;
  };
  return (
    <div className="taskTableRow">
      <TaskNameCell title={title} order={order} />{" "}
      {/* debe juntar componentes de la fila*/}
      <div className="taskBarCell__cell taskBarCell--taskTag">
        <p className="taskTag__text">Task Tags</p>
      </div>
      <div className="taskBarCell__cell taskBarCell--estimate">
        <p className="estimate__text">{points} Points</p>
      </div>
      <div className="taskBarCell__cell taskBarCell--assigned task--assigned">
        <img className="taskRow__avatar" src={assignee.avatar} alt="avatar" />
        <p className="assigned__text">{assignee.fullName}</p>
      </div>
      <div className="taskBarCell__cell taskBarCell--dueDate">
        <p className="dueDate__text">{dateNow()}</p>
      </div>
    </div>
  );
};

export default TaskTableRow;
