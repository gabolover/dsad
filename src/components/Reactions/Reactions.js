import attachIcon from "../../assets/images/attachIcon.svg";
import sharedIcon from "../../assets/images/sharedIcon.svg";
import commentsIcon from "../../assets/images/commentsIcon.svg";
import "./reactions.css";
import avatarDefault from "../../assets/images/avatar.svg";
const Reactions = ({ avatar }) => {
  return (
    <div className="reactions">
      <img
        className="reactions__avatar"
        src={!avatar ? avatarDefault : avatar}
        alt="avatar"
      />
      <div className="reactions__reactions">
        <img
          src={attachIcon}
          className="reactions__attachIcon"
          alt="attach icon"
        />
        <div className="reactions__reactions-shared">
          <p className="reactions-shared__text body--m">4</p>
          <img
            src={sharedIcon}
            className="reactions-shared__icon"
            alt="shared icon"
          />
        </div>
        <div className="reactions__reactions-comments">
          <p className="reactions-comments__text body--m">4</p>
          <img
            src={commentsIcon}
            className="reactions-comments__icon body--m"
            alt="comments icon"
          />
        </div>
      </div>
    </div>
  );
};
export default Reactions;
