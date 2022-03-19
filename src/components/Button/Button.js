import './button.css'
function Button(props) {

    return (
       <input type="image" className="button" src={props.img}/>       
     );
   }
   
   export default Button;