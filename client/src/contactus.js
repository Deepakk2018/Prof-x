import './contactus.css';

function Contactus(){
  function services(){
    window.location.replace("/services");
  }
  function signup(){
    window.location.replace("/regestration");
}
function About(){
    window.location.replace("/about");
}

function feedback(){
    window.location.replace("/feedback");
}
function home(){
    window.location.replace("/");
}
    return(
        <div className="Contact">
              <nav className="nav">
          <div className="nav-logo">
          </div>
          <div className="nav-menu" id="navMenu">
              <ul>
                  <li><a href="#" className="link " onClick={home}>Home</a></li>
                  <li><a href="#" className="link" onClick={About}>About</a></li>
                  <li><a  className="link" onClick={services}>Services</a></li>
                  <li><a href="#" className="link active">ContactUs</a></li>
                  <li><a href="#" className="link" onClick={feedback}>Feedbac</a></li>
              </ul>
          </div>
          <div className="nav-button">
              <button className="btn white-btn" id="loginBtn"onClick={signup} >Sign In</button>
              <button className="btn" id="registerBtn" onClick={signup} >Sign Up</button>
          </div>
          <div className="nav-menu-btn">
              <i className="bx bx-menu" ></i>
          </div>
      </nav>
      <br></br><br></br><br></br><br></br><br></br><br></br>
     
        <main>
          <h1>Contact Us</h1>
          <p>Introductory text about contacting the company.</p>
        
          <section id="address">
            <h2>Address</h2>
            <address>
              121 Rock Street, 21 Avenue<br></br>
              New York, NY 92103-9000
            </address>
          </section>
        
          <section id="email">
            <h2>Email</h2>
            <ul>
              <li><a href="mailto:hello@company.com">hello@company.com</a></li>
              <li><a href="mailto:support@company.com">support@company.com</a></li>
            </ul>
          </section>
        
          <section id="phone">
            <h2>Call Us</h2>
            <ul>
              <li><a href="tel:1234567891">1 (234) 567-891</a></li>
              <li><a href="tel:1234987654">1 (234) 987-654</a></li>
            </ul>
          </section>

        </main>
        </div>
        
    );
}

export default Contactus;