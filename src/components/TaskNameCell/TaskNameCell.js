import sharedIcon from "../../assets/images/sharedIcon.svg";
import commentsIcon from "../../assets/images/commentsIcon.svg";
import rightIcon from "../../assets/images/rightIcon.svg";
import "./tasknamecell.css";
const TaskNameCell = ({ title, order }) => {
  return (
    <div className="taskNameCell body--m">
      <div className="taskNameCell__name">
        <div className="taskNameCell__icon"></div>
        <div className="taskNameCell__text">
          <div className="order">
            <p>0{order}</p>
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className="taskNameCell__reactions">
        <div className="taskNameCell__item taskNameCell__item--coments">
          <p className="coments__text">3</p>
          <img src={commentsIcon} alt="commentsIcon" />
        </div>
        <div className="taskNameCell__item taskNameCell__item--shared">
          <p className="shared__text">5</p>
          <img src={sharedIcon} alt="sharedIcon" />
        </div>
        <div className="taskNameCell__item taskNameCell__item--details">
          <p className="details__text">Details</p>
          <img className="rigthIcon" src={rightIcon} alt="rightIcon" />
        </div>
      </div>
    </div>
  );
};

export default TaskNameCell;
