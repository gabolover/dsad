import projectIcon from "../../assets/images/projectIcon.svg";
import taskCellIcon from "../../assets/images/taskCellIcon.svg";
import plusIcon2 from "../../assets/images/plusIcon2.svg";
import "./taskcell.css";
const TaskCell = ({ status, quantity }) => {
  return (
    <div className="taskCell body--l">
      <div className="taskContainer">
        <img
          className="taskCell__icon taskCell__icon--bottom"
          src={taskCellIcon}
          alt="taskCellIcon"
        />
        <p className="taskCell__text">
          {status} (0{quantity})
        </p>
      </div>

      <div className="iconContainer">
        <div className="taskCell__iconContainer">
          <img
            className="taskCell__icon taskCell__icon--plus"
            src={plusIcon2}
            alt="plusIcon"
          />
        </div>
        <div className="taskCell__iconContainer">
          <img
            className="taskCell__icon taskCell__icon--projectIcon"
            src={projectIcon}
            alt="projectIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCell;
