import './signup.css';
import { useNavigate } from "react-router-dom";
import shape from './shape.svg';
import logo from './logo5.png'

function Signup () { 
    let navigate = useNavigate();

    function navigate_home() {
        //alert("login button works");
        navigate('/home');
      }
    return (
        <div className="signnup">
            <img src= {shape} className="shape" onClick={navigate_home}/>
            <header className="signup-header"> 
                <a className="signup-title">Sign Up</a>
                <a className="signup-subtitle">
                    Sign in to continue
                </a>
            </header>
            <form action="/action_page.php" className="signup-form">
                <label className="laput" for="f-name">First Name: </label>
                <input className="laput" type="text" id="f-name" value = "" name="f-name"/><br/><br/>
                <label className="laput" for="l-name">Last Name: </label>
                <input className="laput" type="text" id="l-name" name="l-name"/><br/><br/>
                <label className="laput" for="u-name">Username: </label>
                <input className="laput" type="text" id="u-name" name="u-name"/><br/><br/>
                <label className="laput" for="pass">Password:  </label>
                <input className="laput" type="text" id="pass" name="pass"/><br/><br/>
                <label className="laput" for="c-pass-s"> Confirm Password:  </label>
                <input className="laput" type="text" id="confirm-pass" name="c-pass-s"/><br/><br/>
                <input type="submit" value="Sign Up" className="signup buttons"/>
            </form>
        </div>
    );
}    

export default Signup;

/*import './signup.css';
import shape from './shape.svg';
import { useNavigate } from "react-router-dom";
//import { useEffect, useState } from 'react';

function SignUp () {
    let navigate = useNavigate();
    function navigate_home() {
        //alert("login button works");
        navigate('/home');

    const [pass, setPass] = useState(0);
    const [confirmPass, setconfirmPass] = useState(0);
    const [passwordStatus, setPasswordStatus] = useState(true);

    function handlePassChange(e){
        setPass(e.target.value)
    }
    
    function handleConfirmPassChange(e){
        setconfirmPass(e.target.value);     
    }

    useEffect = () => {
        if(pass != confirmPass){
            setPasswordStatus(false);
        }else{
            setPasswordStatus(true);
        }
    }
    function myFunction() {
        alert("Hello! I am an alert box!");
      }
    return ( 
        <div className="signnup">
            <img src= {shape} className="shape"/>
            <header className="signup-header"> 
                <a className="signup-title"> Sign Up </a>
                <a className="signup-subtitle"> Enter your information to sign up.</a>
            </header>
            <form action="/action_page.php" className="signup-form">
                    <label for="f-name">First Name: </label>
                    <input type="text" id="f-name" name="f-name"/><br/><br/>
                    <label for="l-name">Last Name: </label>
                    <input type="text" id="l-name" name="l-name"/><br/><br/>
                    <label for="u-name">Username: </label>
                    <input type="text" id="u-name" name="u-name"/><br/><br/>
                    <label for="pass-s">Password:  </label>
                    <input type="text" id="pass" onChange={handlePassChange}   name="pass-s"/><br/><br/>
                    <label for="c-pass-s"> Confirm Password:  </label>
                    <input type="text" id="confirm-pass" onChange ={handleConfirmPassChange}   name="c-pass-s"/><br/><br/>
                    <input type="submit" value="Sign Up" className="signup buttons"/>
             </form>
             <div className={passwordStatus ? 'hidden' : 'error'}>Passwords are Not Equal</div>
        </div>
    );
}

export default SignUp;*/