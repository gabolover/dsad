import checkbox from "../../assets/images/checkbox.svg";
import "./dropdownlabel.css";
const DropDownLabel = ({ setLabel, setLabelVisible }) => {
  const tags = ["ANDROID", "IOS", "NODE_JS", "RAILS", "REACT"];
  return (
    <div className="dropDownLabel">
      <p className="dropDownLabel__title body--xl">Tag Title</p>
      {tags.map((item) => (
        <DropDownLabelItem
          text={item}
          setLabel={setLabel}
          setLabelVisible={setLabelVisible}
          key={`tag${item}`}
        />
      ))}
    </div>
  );
};

export default DropDownLabel;

const DropDownLabelItem = ({ text, setLabel, setLabelVisible }) => {
  const load = () => {
    setLabel(text);
    setLabelVisible(false);
  };

  return (
    <div className="dropDownLabelItem body--m" onClick={load}>
      <img className="dropDownLabelItem__icon" src={checkbox} alt="icon" />
      <p>{text}</p>
    </div>
  );
};
