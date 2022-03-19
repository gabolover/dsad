import SidebarTab from "../SidebarTab/SidebarTab";
import dashboardIcon from '../../assets/images/dashboardIcon.svg'
import taskIcon from '../../assets/images/taskIcon.svg'

import './sidebarTabList.css'

function SidebarTabList() {

    return (
      <div className="SidebarTabList">
        <SidebarTab text="DASHBOARD" icon={dashboardIcon}/>
        <SidebarTab text="MY TASK" icon={taskIcon} />
      </div>
    );
  }
  
  export default SidebarTabList;