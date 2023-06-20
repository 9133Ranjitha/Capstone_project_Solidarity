import React from "react";
import './login.css';
function LoginPage() {
    return(
        <div className="container">
            <img className="backgroundimg" src="resources/istockphoto.jpg"></img>
            <div className="textoverlay">
                <h1>Login</h1>
                <input className="UserName" placeholder="UserName"></input>
                <input className="Password" placeholder="Password"></input>
                <button className="loginbtn">Login</button>
                <p>not Registerd?<span>Create an account</span></p>
            </div>
        </div>
    )
 }

 export default LoginPage;