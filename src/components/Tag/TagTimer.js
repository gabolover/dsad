import "./tagTimer.css";
const TagTimer = ({ logo, text, type }) => (
  <div className={`tagTimer ${type}`}>
    <img className="tag__logo" src={logo} alt="tagLogo" />
    <p className="timerText body--m">{text}</p>
  </div>
);

export default TagTimer;
