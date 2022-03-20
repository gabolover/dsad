import TaskNameCell from "../TaskNameCell/TaskNameCell";
import TaskCell from "../TaskCell/TaskCell";

import "../TaskBarCell/taskbarcell.css";
import "./tasktablerow.css";
import moment from "moment";
import { nowDate } from "../../App";
import Tag from "../Tag/Tag";

const TaskTableRow = ({ title, order, points, assignee, time, tags }) => {
  let timeTask = time.split("T");
  timeTask.splice(1);
  let date = moment(timeTask.toString());
  let dateTask = date.format("D MMMM, YYYY");
  let now = nowDate.format();

  const dateCard = () => {
    if (date.diff(now, "days") === 0) {
      if (date.diff(now, "hours") > 0) return "Less";
      return "OnTime";
    } else if (date.diff(now, "days") > 0 && date.diff(now, "days") <= 2) {
      return "Less";
    } else {
      if (date.diff(now, "days") > 2) return "OnTime";
      return "Late";
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
      <TaskNameCell title={title} order={order} />
      <div className="taskBarCell__cell taskBarCell--taskTag">
        {tags.length > 1 ? (
          <>
            <Tag text={tags[0]} type={tags[0].toLowerCase()} />
            <div className="moreTags">
              <p>+{tags.length - 1}</p>
            </div>
          </>
        ) : (
          <Tag text={tags[0]} type={tags[0].toLowerCase()} />
        )}
      </div>
      <div className="taskBarCell__cell taskBarCell--estimate">
        <p className="estimate__text">{points} Points</p>
      </div>
      <div className="taskBarCell__cell taskBarCell--assigned task--assigned">
        <img className="taskRow__avatar" src={assignee.avatar} alt="avatar" />
        <p className="assigned__text">{assignee.fullName}</p>
      </div>
      <div className="taskBarCell__cell taskBarCell--dueDate">
        <p className={`dueDate__text ${dateCard()}`}>{dateNow()}</p>
      </div>
    </div>
  );
};

export default TaskTableRow;
