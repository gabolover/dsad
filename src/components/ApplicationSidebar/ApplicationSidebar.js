import SidebarTabList from "../SidebarTabList/SidebarTabList";
import logo from "../../assets/images/logo.svg"
import "./applicationSidebar.css"
function ApplicationSidebar() {
    return (
      <div className="Sidebar">
        <img src={logo} className="logo" alt="ravn_logo"/>
        <SidebarTabList/>
      </div>
    );
  }
  
  export default ApplicationSidebar;