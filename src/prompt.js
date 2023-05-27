import { useState, useEffect } from "react";
import shape from './shape.svg';
import settings from './settings.png';

import { useNavigate } from "react-router-dom";

import './home.css';


function Prompt() { 
    let navigate = useNavigate();
    const [ sessionLength, setSessionLength]= useState(20*60*1000);
    const [ sessionTime, setSessionTime]= useState(0);
    const [ sessionStarted, setsessionStarted]= useState(false);

    let nIntervId;

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

    const setSession = (e) => {
        const sl = new Number(e.target.value) * 60000;
        setSessionLength(sl);
        console.log(e.target.value);
    }

    const clearSession = () => {
        clearInterval(nIntervId);
        // release our intervalID from the variable
        nIntervId = null;
    }

    function startSession() {
        if (!nIntervId) {
            timer();
            nIntervId = setInterval(setAlert, sessionLength);
        }
    }
    
    function setAlert() {
      alert("GET BACK TO WORK!");
    }

    function timer(){
        let sec = sessionLength;
        
        console.log('sec ' + sec);
        console.log('sessionLength ' + sessionLength);
        const timer = setInterval(function(){
            let minutes = sec/60000;
            let seconds = sec%60000;
            let displayedSeconds = seconds/1000 < 10 ? "0" + seconds/1000: seconds/1000;
            document.getElementById('safeTimerDisplay').innerHTML=Math.floor(minutes) + ":" + displayedSeconds;

            if (sec < sessionLength && Math.floor(minutes) > 0 && seconds/1000 == 0) {
                document.getElementById('advert').innerHTML="You have " + Math.floor(minutes) + " minutes left";
            }
            
            console.log('minutes ' + minutes);
            console.log('seconds ' + seconds);
            console.log('sec ' + sec);
            sec = sec-1000;
            if (sec < 0) {
                clearInterval(timer);
            }
            
        }, 1000);
    }

    return(
        <div className = "App">
            <img src= {shape} className="shape" onClick={navigate_loggedin}/>
            <div id="safeTimerDisplay"></div>
            <img src= {settings} className="shape2" onClick={navigate_settings}/>
            <header className="title">Prompt:</header>
            <a className = "title2"> Shakespeare Essay</a>
            <label className="laput pad" for="par"> How many minutes would you like your session to be? (Minimum 20)</label>
            <div className = "cent"> 
                <input className="laput " type="number" id="par" onClick={setSession} required min = "20"/><br/><br/>
            </div>
            <div className="button-padding">
                <button type="button" className="signup-button buttons paragraph" onClick= {startSession}>Start Session</button>
            </div>
            
            <p>Congratulations to have already finished your introduction!</p> 
            <p> The next portion is to write approx. 300 words about <i>Twelfth Night </i> by Shakespeare for your first body paragraph.</p>
            <p> You are not allowed to use any sources other than the text for the paragraph.</p>

            <label className="laput pad" for="par"> Type Paragraph Here:</label>
            <div className = "cent"> 
                <input className="laput " type="text" id="par" required/><br/><br/>
                <textarea className="laput " name="txtDescEd" cols="60" rows="10"></textarea>
            </div>
            <div className="advert" id="advert"></div>
        </div>


    );
}
export default Prompt;


