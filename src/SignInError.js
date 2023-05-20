import { useNavigate } from "react-router-dom";

import shape from './shape.svg';
import './home.css';

function SignInError() {
  let navigate = useNavigate();

  const navigate_home = () => {
    navigate('/');
  }

  return (
    <div className="App">
      <img src= {shape} className="shape" onClick={navigate_home}/>
      <div>There was an error with your account creation</div>
    </div>
  );
}

export default SignInError;