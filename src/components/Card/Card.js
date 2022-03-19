import projectIcon from "../../assets/images/projectIcon.svg";
import timer from "../../assets/images/timer.svg";
import TagTimer from "../Tag/TagTimer";
import Tag from "../Tag/Tag";
import Reactions from "../Reactions/Reactions";
import "./card.css";
import moment from "moment";
import { nowDate } from "../../App";

const Card = ({ title, tags, avatar, time, points }) => {
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
      if (date.diff(now, "days") > 2) return "onTime";
      return "late";
    }
  };

  const dateNow = () => {
    if (date.diff(now, "days") === 0) {
      if (date.diff(now, "hours") > 0) return dateTask;
      return (dateTask = "TODAY");
    } else if (date.diff(now, "days") === -1) {
      return (dateTask = "Yesterday");
    }
    return dateTask;
  };
  return (
    <div className="card">
      <div className="card__project-info">
        <p className="card__text body--l">{title}</p>
        <img className="card__icon" src={projectIcon} alt="cardIcon" />
      </div>
      <div className="timer">
        <p className="card__text body--m">{points} Points</p>
        <TagTimer logo={timer} text={dateNow()} type={dateCard()} />
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <Tag text={tag} type={tag.toLowerCase()} key={`${title}-${tag}`} />
        ))}
      </div>
      <Reactions avatar={avatar} />
    </div>
  );
};

export default Card;
