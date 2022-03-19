import "./button.css";
function Button({ img, fun, active }) {
  console.log(active);
  return <input type="image" className="button" src={img} onClick={fun} />;
}

export default Button;
