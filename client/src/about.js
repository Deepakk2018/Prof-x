import './about.css';

function About(){
        function signup(){
            window.location.replace("/regestration");
        }
        function home(){
            window.location.replace("/");
        }
        function services(){
            window.location.replace("/Services");
        }
        function feedback(){
            window.location.replace("/feedback");
        }
        function contact(){
            window.location.replace("/contactus");
        }
    return(
    <div className="about">
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
              <button className="btn white-btn" id="loginBtn" onclick={signup} >Sign In</button>
              <button className="btn" id="registerBtn" onclick={signup} >Sign Up</button>
          </div>
          <div className="nav-menu-btn">
              <i className="bx bx-menu" ></i>
          </div>
      </nav>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<h2>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src= "umesh" alt="umesh" />
      <div class="container">
        <h2>A EASWARA SRI SAI VENKAT</h2>
        <p class="title"></p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team2.jpg" alt="Mike" />
      <div class="container">
        <h2>Y.DEEPAK REDDY</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" />
      <div class="container">
        <h2>V.UMESH REDDY</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default About;