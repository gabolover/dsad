import "./sidebarTab.css";
import "../../assets/fonts/fonts.css";

const SidebarTab = ({ icon, text, fun, active, view }) => {
  return (
    <div className={`sidebarTab ${active && "active"}`} onClick={fun}>
      <img className="icon" src={icon} alt="icon" />
      <p className={`body--m bold ${active ? "textActive" : "text"}`}>{text}</p>
    </div>
  );
};

export default SidebarTab;
