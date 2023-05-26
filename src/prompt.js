import shape from './shape.svg';
import settings from './settings.png';

import { useNavigate } from "react-router-dom";

import './home.css';


function Prompt() { 
    let navigate = useNavigate();

    /*const navigate_home = () => {
        navigate('/');
    }*/
    const navigate_loggedin = () => {
    //alert("login button works");
        navigate('/loggedin');
    } 

    const navigate_settings = () => {
        //alert("login button works");
            navigate('/settings');
    } 

    const start_session = () => {



    }

    function startSession() {
        setInterval(setAlert, 300000);
    }
    function setAlert() {
      alert("GET BACK TO WORK!");
    }

    return(
        <div className = "App">
            <img src= {shape} className="shape" onClick={navigate_loggedin}/>
            <img src= {settings} className="shape2" onClick={navigate_settings}/>
            <header className="title">Prompt:</header>
            <a className = "title2"> Shakespeare Essay</a>
            <label className="laput pad" for="par"> How many minutes would you like your session to be? (Minimum 20)</label>
            <div className = "cent"> 
                <input className="laput " type="number" id="par" required min = "20"/><br/><br/>
            </div>
            <button className="signup-button buttons paragraph" onclick= {startSession()}>Start Session</button>

            <p>Congratulations to have already finished your introduction!</p> 
            <p> The next portion is to write approx. 300 words about <i>Twelfth Night </i> by Shakespeare for your first body paragraph.</p>
            <p> You are not allowed to use any sources other than the text for the paragraph.</p>

            <label className="laput pad" for="par"> Type Paragraph Here:</label>
            <div className = "cent"> 
                <input className="laput " type="text" id="par" required/><br/><br/>
            </div>
        </div>


    );
}
export default Prompt;


