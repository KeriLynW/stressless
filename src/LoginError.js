import { useNavigate } from "react-router-dom";

import shape from './shape.svg';
import './home.css';

function LoginError() {
  let navigate = useNavigate();

  const navigate_home = () => {
    navigate('/');
  }

  return (
    <div className="App">
      <img src= {shape} className="shape" onClick={navigate_home}/>
      <div>There was an error with your credentials</div>
    </div>
  );
}

export default LoginError;