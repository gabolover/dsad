import "./dropdownassignee.css";
import avatar from "../../assets/images/avatar.svg";
const DropDownAssignee = ({ setAssignee, setAssigneeVisible, user }) => {
  return (
    <div className="dropDownAssignee">
      <p className="assignee__text body--xl">Assign To...</p>
      {user.map((user) => (
        <>
          <DropDownAssigneeItem
            setAssignee={setAssignee}
            setAssigneeVisible={setAssigneeVisible}
            users={user}
            key={user.fullName}
          />
        </>
      ))}
    </div>
  );
};

export default DropDownAssignee;

const DropDownAssigneeItem = ({ setAssignee, setAssigneeVisible, users }) => {
  const load = () => {
    setAssignee(users);
    setAssigneeVisible(false);
  };

  return (
    <div className="dropDownAssigneeItem body--m" onClick={load}>
      <img
        className="dropDownAvatar"
        src={users.avatar ? users.avatar : avatar}
        alt="avatar users"
      />
      <p>{users.fullName}</p>
    </div>
  );
};
