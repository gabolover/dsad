import SidebarTabList from "../SidebarTabList/SidebarTabList";
import logo from "../../assets/images/logo.svg";
import "./applicationSidebar.css";
function ApplicationSidebar({ view, setView }) {
  return (
    <div className="Sidebar">
      <img src={logo} className="logo" alt="ravn_logo" />
      <SidebarTabList view={view} setView={setView} />
    </div>
  );
}

export default ApplicationSidebar;
