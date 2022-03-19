import React, { useState } from "react";
import SidebarTab from "../SidebarTab/SidebarTab";
import dashboardIcon from "../../assets/images/dashboardIcon.svg";
import taskIcon from "../../assets/images/taskIcon.svg";

import "./sidebarTabList.css";

function SidebarTabList({ view, setView }) {
  const [active, setActive] = useState(true);

  const taskRow = () => {
    setView(false);
    setActive(false);
  };
  const taskDash = () => {
    setView(true);
    setActive(true);
  };
  return (
    <div className="SidebarTabList">
      <SidebarTab
        text="DASHBOARD"
        icon={dashboardIcon}
        fun={taskDash}
        active={view}
      />
      <SidebarTab text="MY TASK" icon={taskIcon} fun={taskRow} active={!view} />
    </div>
  );
}

export default SidebarTabList;
