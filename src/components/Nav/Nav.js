import searchIcon from "../../assets/images/searchIcon.svg";
import notificationIcon from "../../assets/images/notificationIcon.svg";
import avatar from "../../assets/images/avatar.svg";
import cancelIcon from "../../assets/images/cancelIcon.svg";
import "./nav.css";

const Nav = () => {
  const visible = () => {
    const element = document.getElementById("cancelIcon");

    element.className += " visible";
  };

  const hidden = () => {
    const element = document.getElementById("cancelIcon");
    const bar = document.getElementById("searchBar");
    if (bar.value === "") {
      element.classList.remove("visible");
    }
  };

  const closeSearchBar = () => {
    const element = document.getElementById("cancelIcon");
    const bar = document.getElementById("searchBar");
    bar.value = "";
    element.classList.remove("visible");
  };

  return (
    <div className="nav">
      <div className="search">
        <label
          className="search__container"
          onFocus={visible}
          onBlur={hidden}
          id="search"
        >
          <img className="search__icon" src={searchIcon} alt="search icon" />
          <input
            type="text"
            placeholder="Search"
            id="searchBar"
            className="search__bar body--m"
          ></input>
        </label>
        <div className="search__options">
          <img
            className="cancelIcon"
            src={cancelIcon}
            id="cancelIcon"
            onClick={closeSearchBar}
            alt="cancel icon"
          />
          <img
            className="notificationIcon"
            src={notificationIcon}
            alt="notification icon"
          />
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
