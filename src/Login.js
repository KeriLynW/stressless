import './login.css';
import { useNavigate } from "react-router-dom";
import shape from './shape.svg';

function Login () { 
    let navigate = useNavigate();

    function navigate_home() {
        //alert("login button works");
        navigate('/home');
      }
    return (
        <div className="Login">
            <img src= {shape} className="shape" onClick={navigate_home}/>
            <header className="Login-header"> 
                <a className="login-title">Login</a>
                <a className="login-subtitle">
                    Sign in to continue
                </a>
            </header>
            <form action="/action_page.php" className="log-form">
                    <label  className="laput" for="u-name">Username: </label>
                    <input  className="laput" type="text" id="u-name" name="u-name"/><br/><br/>
                    <label  className="laput" for="pass-l">Password:  </label>
                    <input  className="laput" type="password" id="pass-l" name="pass-l" required/><br/><br/>
                    <input type="submit" value="Login" className="login buttons"/>
             </form>
        </div>
    );
}    

export default Login;