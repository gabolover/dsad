import React, { useState } from "react";
import SidebarTab from "../SidebarTab/SidebarTab";
import dashboardIcon from "../../assets/images/dashboardIcon.svg";
import taskIcon from "../../assets/images/taskIcon.svg";
import taskIconActive from "../../assets/images/taskIconActive.svg";

import dashBoardActive from "../../assets/images/dashBoardActive.svg";
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
        icon={view ? dashBoardActive : dashboardIcon}
        fun={taskDash}
        active={view}
      />
      <SidebarTab
        text="MY TASK"
        icon={!view ? taskIconActive : taskIcon}
        fun={taskRow}
        active={!view}
      />
    </div>
  );
}

export default SidebarTabList;
