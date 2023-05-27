import log from './logoonly.png';
import shape from './shape.svg';
import settings from './settings.png';

import { useNavigate } from "react-router-dom";
import './home.css';

function LoggedIn() {
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
      <img src= {settings} className="shape2" onClick={navigate_settings}/>
      <div className="message">You have successfully Logged In!</div>
      <header className="title">Welcome back!</header>
      <body className="body">
      <p className="task">Tasks:</p>
      <a >-&#10217; Write Shakespeare Essay </a> <a className = "due_time"> (due on Wednesday)</a>
      <p className="task_note" ><b>Note:</b> Remember To start broad and then slowly become more specific for the introduction</p>
      <a >-&#10217; Code this Website </a> <a className = "due_time"> (Must be finished by Saturday morning)</a> <a className = "Prompt" onClick = {navigate_prompt}>Generate Prompt</a>
      <p className="task_note padd"> <b>Note:</b> Remember to work on the tasks portion today.</p>
      <a>-&#10217; Prepare for geography test on climate change</a> <a className = "due_time"> (Test on next Wednesday)</a>
      <p className="task_note"> <b>Note:</b> Review class notes for the entire unit.</p>
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

export default LoggedIn;
