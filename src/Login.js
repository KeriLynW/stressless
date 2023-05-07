import { useState } from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
import shape from './shape.svg';

function Login () { 
    const [ username, setUsername]= useState("");
    const [ [password], setPassword]= useState("");
    let navigate = useNavigate();

    const navigate_home = () => {
        //alert("login button works");
        navigate('/');
      }

    const verifyUserAndLoginOrRedirect = () => {
        navigate('/loggedin');
    }

    const updateUsername = event => {
        setUsername(event.target.value);
     };

     const updatePassword = event => {
        setPassword(event.target.value);
     };

    return (
        <div className="Login">
            <img src= {shape} className="shape" onClick={navigate_home}/>
            <header className="Login-header"> 
                <a className="login-title">Login</a>
                <a className="login-subtitle">
                    Sign in to continue
                </a>
            </header>
            <div className="log-form">
                <label  className="laput" for="u-name">Username: </label>
                <input  className="laput" type="text" id="u-name" onChange={updateUsername}/><br/><br/>
                <label  className="laput" for="pass-l">Password:  </label>
                <input  className="laput" type="text" id="pass-l" onChange={updatePassword}/><br/><br/>
                <button className="login-button buttons" onClick={verifyUserAndLoginOrRedirect}>Login</button>
            </div>
        </div>
    );
}    

export default Login;