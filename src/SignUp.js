import { useState, useEffect } from "react";
import './signup.css';
import { useNavigate } from "react-router-dom";
import shape from './shape.svg';
import logo from './logo5.png'

function Signup () { 
    let [ count, setCount] = useState(0);
    const [ firstname, setFirstname] = useState("");
    const [ lastname, setLastname] = useState("");
    const [ username, setUsername] = useState("");
    const [ password, setPassword] = useState("");
    const [ password2, setPassword2] = useState("");
    const [disabledButton, setDisabledButton] = useState(true);
    const [password2Enabled, setPassword2Enabled] = useState(false);
    let navigate = useNavigate();
    
    useEffect(() => {
        if(password.length>3 && password2Enabled && password2 != password){
            setDisabledButton(true);
        } else if(password2Enabled) {
            setDisabledButton(false);
        }

        if(password2.length>3 ){
            setPassword2Enabled(true);
        } 
    })

    function navigate_home() {
        //alert("login button works");
        navigate('/');
    }

    const updateFirstname = event => {
        setFirstname(event.target.value);
     };

     const updateLastname = event => {
        setLastname(event.target.value);
     };

     const updateUsername = event => {
        setUsername(event.target.value);
     };

     const updatePassword = event => {
        setPassword(event.target.value);
     };

     const updatePassword2 = event => {
        setPassword2(event.target.value);
     };

     const signupUser = event => {
        alert("hello");
     };

    return (
        <div className="signnup">
            <img src= {shape} className="shape" onClick={navigate_home}/>
            <div className="signup-form">
                <label className="laput" for="f-name">First Name: </label>
                <input className="laput" type="text" id="f-name" onChange={updateFirstname}/><br/><br/>
                <label className="laput" for="l-name">Last Name: </label>
                <input className="laput" type="text" id="l-name" onChange={updateLastname}/><br/><br/>
                <label className="laput" for="u-name">Username: </label>
                <input className="laput" type="text" id="u-name" onChange={updateUsername}/><br/><br/>
                <label className="laput" for="pass">Password:  </label>
                <input className="laput" type="text" id="pass" onChange={updatePassword}/><br/><br/>
                <label className="laput" for="c-pass-s"> Confirm Password:  </label>
                <input className="laput" type="text" id="pass2" onChange={updatePassword2}/><br/><br/>
                <label className={(password.length>3 && disabledButton) ? "password-error-message": "hidden"} for="c-pass-s"> Passwords do not match</label>
                <br/>
                <br/>
                <button disabled={disabledButton} className={disabledButton ? "signup-button buttons disabled" : "signup-button buttons"} onClick={signupUser} >Signup</button>
            </div>
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