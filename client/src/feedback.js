import React, { useState } from 'react';
import './feedback.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FeedbackForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      phone: data.get('phone'),
      email: data.get('email'),
      feedback: data.get('feedback'),
    });
   await axios.post('http://localhost:3000/login', {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      phone: data.get('phone'),
      email: data.get('email'),
      feedback: data.get('feedback'),
      } ).then((response) => {
        console.log(response.data)
      })
  }  
  function signup(){
    window.location.replace("/regestration");
}
function About(){
    window.location.replace("/about");
}
function services(){
    window.location.replace("/Services");
}
function feedbackx(){
    window.location.replace("/feedback");
}
function contact(){
    window.location.replace("/contactus");
}
function home(){
  window.location.replace("/");
}
  return (
    <div className='feedback'>

<nav className="nav">
          <div className="nav-logo">
          </div>
          <div className="nav-menu" id="navMenu">
              <ul>
                  <li><a  className="link " onClick={home}>Home</a></li>
                  <li><a  className="link" onClick={About}>About</a></li>
                  <li><a  className="link" onClick={services} >Services</a></li>
                  <li><a href="#" className="link" onClick={contact}>Contact</a></li>
                  <li><a href="#" className="link active" onClick={feedbackx}>Feedback</a></li>
              </ul>
          </div>
          </nav>
          <div className="nav-button">
              <button className="btn white-btn" id="loginBtn" onClick={signup} >Sign In</button>
              <button className="btn" id="registerBtn" onClick={signup} >Sign Up</button>
          </div>
      <br></br><br></br><br></br><br></br>
          <div className='body'>
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>FEEDBACK FORM</h2>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="feedback">Your Feedback:</label>
      <textarea
        id="feedback"
        name="feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <button type="submit">SUBMIT QUERY</button>
    </form>
    </div>
    </div>
  );
}

export default FeedbackForm;
