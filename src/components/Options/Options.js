import "./options.css";
import deleteIcon from "../../assets/images/deleteIcon.svg";
import editIcon from "../../assets/images/editIcon.svg";
import DELETE_TASK from "../../graphql/deleteTask";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
const Options = ({ id, dataP }) => {
  const [deleteTask, { data, loading, error }] = useMutation(DELETE_TASK);
  const deleteCard = () => {
    deleteTask({
      variables: {
        input: {
          id: `${id}`,
        },
      },
    });

    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="options">
      <OptionsItem text="Edit" img={editIcon} />
      <OptionsItem
        text="Delete"
        img={deleteIcon}
        onClick={deleteCard}
        onBlur={() => console.log("reload")}
      />
    </div>
  );
};

export default Options;

const OptionsItem = ({ text, img, onClick }) => {
  return (
    <div className="optionsItem" onClick={onClick}>
      <img src={img} alt="optionsIcon" />
      <p className="options__text body--m">{text}</p>
    </div>
  );
};
