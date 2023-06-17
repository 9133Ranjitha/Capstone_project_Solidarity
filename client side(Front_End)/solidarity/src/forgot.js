import React from "react";
import './forgot.css';
function ForGotPage() {
    return(
        <div className="container">
            <img className="backgroundimg" src="resources/istockphoto.jpg"></img>
            <div className="textoverlay">
                <h1>Forgot password</h1>
                <input className="Email" placeholder="Email"></input>
                <button className="loginbtn">Submit</button>
                <p>Back to <span>login?</span></p>
               
            </div>
        </div>
    )
 }

 export default ForGotPage;