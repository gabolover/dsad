import "./sidebarTab.css";
import "../../assets/fonts/fonts.css";

const SidebarTab = ({icon, text}) => (
  <div className="sidebarTab">
    <img className="icon" src={icon} />
    <p className="body--m text bold ">{text}</p>
  </div>
);

export default SidebarTab;
