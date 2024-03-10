import React from 'react';
import './index.css';
import Regestration from './Regestration.js';
import About from './about.js';
import Contactus from './contactus.js';
import FeedbackForm from './feedback.js';
import Services from './services.js';
import Home from './home.js';
import ReactDOM from 'react-dom';
import Mainhome from './mainhome.js';
import AddFlightForm from './adminpermit.js';
import ChangePassword from './changepassword.js';
import Checkout from './checkout.js';
import AppBook from './bookflight.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Render(){
  return(
    <Router>
        <Routes>
          <Route path = "/changepassword" element = {<ChangePassword/>}></Route>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/regestration" element = {<Regestration/>}></Route>
          <Route path = "/about" element = {<About/>}></Route>
          <Route path = "/contactus" element ={<Contactus/>}></Route>
          <Route path = "/feedback" element = {<FeedbackForm/>}></Route>
          <Route path = "/services" element = {<Services/>}></Route>
          <Route path="/mainhome" element  = {<Mainhome/>}></Route>
          <Route path = "/mainhome/bookticket" element = {<AppBook/>}></Route>
          <Route path="/mainhome/checkout" element  = {<Checkout/>}></Route>
          <Route path = "/admin/addflights" element = {<AddFlightForm/>}></Route>
        </Routes>
        </Router>  
  );
}

ReactDOM.render(<Render/>,document.getElementById('root'));