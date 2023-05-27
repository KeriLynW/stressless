import log from './logoonly.png';
import shape from './shape.svg';
import { useNavigate } from "react-router-dom";
import './home.css';

function SignedIn() {
  let navigate = useNavigate();

  const navigate_home = () => {
    //alert("login button works");
    navigate('/');
  }
  const navigate_settings = () => {
    //alert("login button works");
    navigate('/settings');
  }
  const navigate_prompt = () => {
    //alert("login button works");
    navigate('/prompt');
  }

  return (
    <div className="App">
      <img src= {shape} className="shape" onClick={navigate_home}/>
      <div className="message">You have successfully created your account!</div>
      <header className="title">Welcome to StressLess!</header>
      <a className="sub-title">
          Here's a quick rundown of how things work around here.
      </a>
      <body className="body">
      <p className="task">Tasks:</p>
      <a > -&#10217; Example Task </a> <a className = "due_time"> (Timeframe for completion)</a>
      <p className="task_note" ><b>Note:</b> Remember Lorem dorat sit amet</p>
      <a className = "padleft" onClick = {navigate_prompt}>Generate Prompt</a>
      <p className = "add"> <b>ADD ANOTHER TASK </b></p>
      <label className="task_add" for="task"> Task </label>
      <input className="task_add" type="text" id="task" required/><br/><br/>
      <label className="task_add" for="note"> Note (optional) </label>
      <input className="task_add" type="text" id="note" required/><br/><br/>
      <label className="task_add" for="due"> Timeframe to complete </label>
      <input className="task_add" type="text" id="due" required/><br/><br/>
      <button className="signup-button buttons">Add Task</button>
      </body>
    </div>
  );
}

export default SignedIn;