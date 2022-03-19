import "./tag.css";
const Tag = ({ text, type }) => (
  <div className={`tag ${type}`}>
    <p className="body--m">{text}</p>
  </div>
);

export default Tag;
