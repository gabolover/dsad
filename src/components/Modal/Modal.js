import React, { useState, useEffect } from "react";
import dueDateIcon from "../../assets/images/dueDateIcon.svg";
import assigneeIcon from "../../assets/images/assigneeIcon.svg";
import estimateIcon from "../../assets/images/estimateIcon.svg";
import labelIcon from "../../assets/images/labelIcon.svg";
import DropDownEstimate from "../DropDownEstimate/DropDownEstimate";
import DropDownAssignee from "../DropDownAssignee/DropDownAssignee";
import DropDownLabel from "../DropDownLabel/DropDownLabel";
import { useMutation } from "@apollo/client";
import Options from "../Options/Options";
import Calendar from "../Calendar/Calendar";
import CREATE_TASK from "../../graphql/createTask";
import moment from "moment";
import "./modal.css";

const Modal = ({ setModal, users }) => {
  const [createTask, { data, loading, error }] = useMutation(CREATE_TASK);
  const [estimate, setEstimate] = useState(null);
  const [estimateVisible, setEstimateVisible] = useState(false);
  const [assignee, setAssignee] = useState(null);
  const [assigneeVisible, setAssigneeVisible] = useState(false);
  const [label, setLabel] = useState("Label");
  const [labelVisible, setLabelVisible] = useState(false);
  const [dueDate, setDueDate] = useState("Due Date");
  const [dueDateVisible, setDueDateVisible] = useState(false);
  const [input, setInput] = useState("");
  const user = users;

  if (data != undefined) {
    window.location.reload();
  }

  const modalDisabled = () => {
    setModal(false);
  };

  const showAssignee = () => {
    setAssigneeVisible(true);
  };
  const showDueDate = () => {
    setDueDateVisible(true);
  };

  const showLabel = () => {
    setLabelVisible(true);
  };

  const showEstimate = () => {
    setEstimateVisible(true);
  };

  return (
    <>
      <form
        className="modal"
        onSubmit={(e) => {
          e.preventDefault();
          createTask({
            variables: {
              input: {
                name: `${input}`,
                tags: [`${label}`],
                status: "BACKLOG",
                pointEstimate: `${estimate[0]}`,
                dueDate: `${moment(dueDate).format()}`,
                assigneeId: `${assignee.id}`,
              },
            },
          });
        }}
      >
        <input
          id="title"
          className="modal__title body--xl"
          placeholder="Task Title"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        ></input>

        <div className="modal__tags body--m">
          <div
            className="modal__item modal__item--estimate"
            onClick={showEstimate}
          >
            <img src={estimateIcon} className="iconItem" alt="iconItem" />
            <p className="textItem">
              {!estimate ? "Estimate" : `${estimate[1]} Points`}
            </p>
          </div>
          <div
            className="modal__item modal__item--assignee"
            onClick={showAssignee}
          >
            <img src={assigneeIcon} className="iconItem" alt="iconItem" />
            <p className="textItem">
              {assignee == null ? "Assigned" : assignee.fullName}
            </p>
          </div>
          <div className="modal__item modal__item--label" onClick={showLabel}>
            <img src={labelIcon} className="iconItem" alt="iconItem" />
            <p className="textItem">{label}</p>
          </div>

          <div
            className="modal__item modal__item--dueDate"
            onClick={showDueDate}
          >
            <img src={dueDateIcon} className="iconItem" alt="iconItem" />
            <p className="textItem">{dueDate}</p>
          </div>
        </div>
        <div className="modal__buttons">
          <button
            className="modal__button modal_button--cancel  body--m"
            onClick={modalDisabled}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="modal__button modal_button--create  body--m"
          >
            Create
          </button>
        </div>
      </form>
      {estimateVisible && (
        <DropDownEstimate
          setEstimate={setEstimate}
          setEstimateVisible={setEstimateVisible}
        />
      )}
      {assigneeVisible && (
        <DropDownAssignee
          setAssignee={setAssignee}
          setAssigneeVisible={setAssigneeVisible}
          user={user}
        />
      )}
      {labelVisible && (
        <DropDownLabel setLabel={setLabel} setLabelVisible={setLabelVisible} />
      )}
      {dueDateVisible && (
        <Calendar
          setDueDate={setDueDate}
          setDueDateVisible={setDueDateVisible}
        />
      )}
    </>
  );
};
export default Modal;
