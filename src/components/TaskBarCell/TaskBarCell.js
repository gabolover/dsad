import "./taskbarcell.css";
const TaskBarCell = () => {
  return (
    <div className="taskBarCell body--m">
      <div className="taskBarCell__cell taskBarCell--taskName">
        <p className="taskName__text"># Task Name</p>
      </div>

      <div className="taskBarCell__cell taskBarCell--taskTag">
        <p className="taskTag__text">Task Tags</p>
      </div>
      <div className="taskBarCell__cell taskBarCell--estimate">
        <p className="estimate__text">Estimate</p>
      </div>
      <div className="taskBarCell__cell taskBarCell--assigned">
        <p className="assigned__text">Task Assign Name</p>
      </div>
      <div className="taskBarCell__cell taskBarCell--dueDate">
        <p className="dueDate__text">Due Date</p>
      </div>
    </div>
  );
};

export default TaskBarCell;
