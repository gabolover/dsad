import plusIcon from "../../assets/images/plusIcon.svg";
import dashboardIconDefault from "../../assets/images/dashboardIconDefault.svg";
import taskIconDefault from "../../assets/images/taskIconDefault.svg";
import Button from "../Button/Button";
import './buttonsBar.css'
function ButtonsBar(props) {
  return (
    <div className="buttons-bar">
      <div className="switch-button">
      <Button img={taskIconDefault} />
      <Button img={dashboardIconDefault} />
      </div>
      <Button img={plusIcon} />
    </div>
  );
}

export default ButtonsBar;
