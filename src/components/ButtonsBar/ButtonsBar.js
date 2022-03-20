import React, { useState } from "react";

import plusIcon from "../../assets/images/plusIcon.svg";
import dashboardIconDefault from "../../assets/images/dashboardIconDefault.svg";
import dashboardDisabled from "../../assets/images/dashboardDisabled.svg";
import taskIconDefault from "../../assets/images/taskIconDefault.svg";
import taskIconBarActive from "../../assets/images/taskIconBarActive.svg";
import Button from "../Button/Button";
import "./buttonsBar.css";

function ButtonsBar({ view, setView, setModal }) {
  const [active, setActive] = useState(true);
  const taskRow = () => {
    setView(false);
    setActive(false);
  };
  const taskDash = () => {
    setView(true);
    setActive(true);
  };
  const showModal = () => {
    setModal(true);
  };

  return (
    <div className="buttons-bar">
      <div className="switch-button">
        <Button
          img={!view ? taskIconBarActive : taskIconDefault}
          fun={taskRow}
          view={view}
          active={!view}
        />
        <Button
          img={view ? dashboardIconDefault : dashboardDisabled}
          fun={taskDash}
          view={view}
          active={view}
        />
      </div>
      <Button img={plusIcon} fun={showModal} />
    </div>
  );
}

export default ButtonsBar;
