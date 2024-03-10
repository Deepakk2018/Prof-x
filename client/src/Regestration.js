import React from 'react';
import './regestration.css';
import { callApi, errorResponse } from './main';

function Regestration() {
    function About() {
        window.location.replace("/about");
    }
    function services() {
        window.location.replace("/Services");
    }
    function feedback() {
        window.location.replace("/feedback");
    }
    function contact() {
        window.location.replace("/contactus");
    }
    function home() {
        window.location.replace("/");
    }

    function myMenuFunction() {
        var i = document.getElementById("navMenu");

        if (i.className === "nav-menu") {
            i.className += " responsive";
        } else {
            i.className = "nav-menu";
        }
    }

    function login() {
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        var a = document.getElementById("loginBtn");
        var b = document.getElementById("registerBtn");

        x.style.left = "4px";
        y.style.right = "-520px";
        y.style.display = "block";
        a.classList.add("white-btn");
        b.classList.remove("white-btn");
        x.style.opacity = 1;
        y.style.opacity = 0;
    }

    function register() {
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        var a = document.getElementById("loginBtn");
        var b = document.getElementById("registerBtn");

        x.style.left = "-510px";
        y.style.right = "5px";
        x.style.display = "block";
        a.classList.remove("white-btn");
        b.classList.add("white-btn");
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

    function validate() {
        var email = document.getElementById('email');
        var password = document.getElementById('password');

        var url = "http://localhost:5000/regestration/signin";
        var data = JSON.stringify({
            email: email.value,
            password: password.value
        });
        callApi("POST", url, data, loginSuccess, console.error());
    }

    function loginSuccess(res) {
        var data = JSON.parse(res);
        if (data === 1)
            window.location.replace("/mainhome");
        else
            alert("Invalid Credentials!");
    }

    function userregister() {
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var url = "http://localhost:5000/regestration/signup";
        var data = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        });
        callApi("POST", url, data, registeredSuccess, errorResponse);
        //alert("Registered successfully...");
    
        // Clear input fields after registration
        document.getElementById('firstname').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }
    

    function registeredSuccess(res) {
        var data = JSON.parse(res);
        alert(data);
        window.location.replace("/");
    }

    return (
        <div className="wrapper">
      <nav className="nav">
          <div className="nav-logo">
          </div>
          <div className="nav-menu" id="navMenu">
              <ul>
                  <li><a  href = "#" className="link" onclick={home}>Home</a></li>
                  <li><a  className="link active">About</a></li>
                  <li><a  className="link" onclick={services} >Services</a></li>
                  <li><a  className="link" onclick={contact}>ContactUs</a></li>
                  <li><a  className="link" onclick={feedback}>Feedback</a></li>
              </ul>
          </div>
          <div className="nav-button">
              <button className="btn white-btn" id="loginBtn" onclick={login} >Sign In</button>
              <button className="btn" id="registerBtn" onclick={register} >Sign Up</button>
          </div>
          <div className="nav-menu-btn">
              <i className="bx bx-menu" ></i>
          </div>
      </nav>
            <div className="form-box">
                <div className="login-container" id="login">
                    <div className="top">
                        <span>Don't have an account? <button onClick={register}>Sign Up</button></span>
                        <header>Login</header>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" id='email' placeholder="Username or Email" />
                        <i className="bx bx-user"></i>
                    </div><br></br>
                    <div className="input-box">
                        <input type="password" className="input-field" id='password' placeholder="Password" />
                        <i className="bx bx-lock-alt"></i>
                    </div><br></br>
                    <div className="input-box">
                        <input type="submit" className="submit" onClick={validate} value="Sign In" />
                    </div>
                    <div className="two-col">
                        <div className="one">
                            <input type="checkbox" id="login-check" />
                            <label htmlFor="login-check"> Remember Me</label>
                        </div>
                        <div className="two">
                            <label><button>Forgot password?</button></label>
                        </div>
                    </div>
                </div>

                <div className="register-container" id="register">
                    <div className="top">
                        <span>Have an account? <button onClick={login}>Login</button></span>
                        <header>Sign Up</header>
                    </div>
                    <div className="two-forms">
                        <div className="input-box">
                            <input type="text" className="input-field" id='firstname' placeholder="Firstname" />
                            <i className="bx bx-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" className="input-field" id='lastname' placeholder="Lastname" />
                            <i className="bx bx-user"></i>
                        </div>
                    </div><br></br>
                    <div className="input-box">
                        <input type="text" className="input-field" id='email' placeholder="Email" /><br></br>
                        <i className="bx bx-envelope"></i>
                    </div><br></br>
                    <div className="input-box">
                        <input type="password" className="input-field" id='password' placeholder="Password" /><br></br>
                        <i className="bx bx-lock-alt"></i>
                    </div><br></br>
                    <div className="input-box">
                        <input type="submit" className="submit" onClick={userregister} value="Register" /><br></br>
                    </div><br></br>
                    <div className="two-col">
                        <div className="one">
                            <input type="checkbox" id="register-check" />
                            <label htmlFor="register-check"> Remember Me</label>
                        </div>
                        <div className="two">
                            <label><button>Terms & conditions</button></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Regestration;
