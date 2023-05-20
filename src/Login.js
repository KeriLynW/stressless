import { useState, useEffect } from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
import shape from './shape.svg';

import { getUsers } from './services/users';

function Login () { 
    const [ username, setUsername]= useState("");
    const [ password, setPassword]= useState("");
    const [users, setUsers] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        let mounted = true;
        getUsers()
          .then(users => {
            if(mounted) {
              setUsers(users)
            }
          })
        return () => mounted = false;
      }, [])

    const navigate_home = () => {
        //alert("login button works");
        navigate('/');
      }

    const verifyUserAndLoginOrRedirect = () => {
        let user = {};
        user = users.filter(user => user.username == username);

        if(user[0] && user[0].password == password) {
            navigate('/loggedin');
        } else {
            navigate('/loginerror');
        }
    }

    const updateUsername = event => {
        setUsername(event.target.value);
        console.log(username);
     };

     const updatePassword = event => {
        setPassword(event.target.value);
        console.log(password);
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