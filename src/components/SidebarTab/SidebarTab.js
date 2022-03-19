import "./sidebarTab.css";
import "../../assets/fonts/fonts.css";

const SidebarTab = ({ icon, text, fun, active, view }) => {
  console.log(active);
  return (
    <div className={`sidebarTab ${active && "active"}`} onClick={fun}>
      <img className="icon" src={icon} />
      <p className="body--m text bold ">{text}</p>
    </div>
  );
};

export default SidebarTab;
