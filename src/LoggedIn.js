import log from './logoonly.png';
import shape from './shape.svg';
import { useNavigate } from "react-router-dom";
import './home.css';

function LoggedIn() {
  let navigate = useNavigate();

  const navigate_home = () => {
    //alert("login button works");
    navigate('/');
  }

  return (
    <div className="App">
      <img src= {shape} className="shape" onClick={navigate_home}/>
      <div>You have successfully Logged In</div>
    </div>
  );
}

export default LoggedIn;
