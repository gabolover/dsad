import "./taskbar.css";
import projectIcon from "../../assets/images/projectIcon.svg";
import taskCellIcon from "../../assets/images/taskCellIcon.svg";
import plusIcon2 from "../../assets/images/plusIcon2.svg";
import sharedIcon from "../../assets/images/sharedIcon.svg";
import commentsIcon from "../../assets/images/commentsIcon.svg";
import rightIcon from "../../assets/images/rightIcon.svg";

export const taskBarCell = () => {
  return (
    <div className="taskBarCell">
      <p className="taskName"># Task Name</p>
    </div>
  );
};

export const taskCell = () => {
  return (
    <div className="taskCell">
      <img
        className="taskCell__icon taskCell__icon--bottom"
        src={taskCellIcon}
        alt="taskCellIcon"
      />
      <p className="taskCell__text">To Do (05)</p>
      <img
        className="taskCell__icon taskCell__icon--plus"
        src={plusIcon2}
        alt="plusIcon"
      />
      <img
        className="taskCell__icon taskCell__icon--projectIcon"
        src={projectIcon}
        alt="projectIcon"
      />
    </div>
  );
};

export const taskNameCell = () => {
  return (
    <div className="taskNameCell">
      <div className="taskNameCell__icon"></div>
      <div className="taskNameCell__text">
        <p>01</p>
        <p>Create wireframe</p>
      </div>
      <p className="taskCell__text">To Do (05)</p>
      <div className="taskNameCell__reactions">
        <div className="taskNameCell__coments">
          <p className="coments__text">3</p>
          <img src={commentsIcon} alt="commentsIcon" />
        </div>
        <div className="taskNameCell__shared">
          <p className="shared__text">5</p>
          <img src={sharedIcon} alt="sharedIcon" />
        </div>
        <div className="taskNameCell__details">
          <p className="details__text">Details</p>
          <img src={rightIcon} alt="rightIcon" />
        </div>
      </div>
    </div>
  );
};

const TaskBar = () => {
  return (
    <div className="taskbar">
      <taskBarCell />
      <taskCell />
      <taskNameCell />
    </div>
  );
};
export default TaskBar;
