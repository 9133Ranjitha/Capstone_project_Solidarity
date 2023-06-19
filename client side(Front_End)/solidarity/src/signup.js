import React from "react";
import './signup.css';
function SignUpPage() {
    return(
        <div className="container">
            <img className="backgroundimg" src="resources/istockphoto.jpg"></img>
            <div className="textoverlay">
                <h1>SignUp</h1>
                <input className="UserName" placeholder="UserName"></input>
                <input className="Password" placeholder="Password"></input>
                <input className="Email" placeholder="Email"></input>
               <div className="check"><input className="checkbox" type="checkbox"></input><p>i agree all terms policy</p></div> 
               <span>forget password?</span><br />
                <button className="loginbtn">SignUp</button>
               
            </div>
        </div>
    )
 }

 export default SignUpPage;