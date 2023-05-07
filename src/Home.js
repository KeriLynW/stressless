import log from './logoonly.png';
import shape from './shape.svg';
import { useNavigate } from "react-router-dom";
import './home.css';

function Home() {
  let navigate = useNavigate();

  function login() {
    //alert("login button works");
    navigate('/login');
  }

  function signup() {
    //alert("signup button works");
    navigate('/signup');
  }

  return (
    <div className="App">
      <img src= {shape} className="shape"/>
      <header className="App-header">
      <img src={log} className="main-img" /> 
        <p className="title">
          Welcome to StressLess!
        </p>
        <a className="sub-title">
          Start your anti-procrastination journey here.
        </a>
        <button className="login-button buttons" onClick={login}> Login </button>
        <div className= "divider">
          or
        </div>
        <button className="signup-button buttons" onClick={signup}> Sign Up </button>
      </header>
    </div>
  );
}

export default Home;
