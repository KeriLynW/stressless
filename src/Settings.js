import shape from './shape.svg';
import settings from './settings.png';

import { useNavigate } from "react-router-dom";

import './home.css';


function Settings() { 
    let navigate = useNavigate();

    /*const navigate_home = () => {
        navigate('/');
    }*/
    const navigate_loggedin = () => {
    //alert("login button works");
        navigate('/loggedin');
    } 

    return(
        <div className = "App">
            <img src= {shape} className="shape" onClick={navigate_loggedin}/>
            <img src= {settings} className="shape2"/>
            <header className="title">Settings</header>
            <p><u> Click to Change Username</u></p>
            <p><u> Click to Change Password</u></p>
            <p> <u>CLick to Change Language</u></p>


        </div>


    );
}
export default Settings;


