import './home.css'

function Home(){
    function signup(){
        window.location.replace("/regestration");
    }
    function About(){
        window.location.replace("/about");
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
        <div className='home'>
                          <nav className="nav">
          <div className="nav-logo">
          </div>
          <div className="nav-menu" id="navMenu">
              <ul>
                  <li><a  className="link active">Home</a></li>
                  <li><a  className="link" onClick={About}>About</a></li>
                  <li><a  className="link" onClick={services} >Services</a></li>
                  <li><a href="#" className="link" onClick={contact}>Contact</a></li>
                  <li><a href="#" className="link" onClick={feedback}>Feedback</a></li>
              </ul>
          </div>
          <div className="nav-button">
              <button className="btn white-btn" id="loginBtn" onClick={signup} >Sign In</button>
              <button className="btn" id="registerBtn" onClick={signup} >Sign Up</button>
          </div>
          <div className="nav-menu-btn">
              <i className="bx bx-menu" ></i>
          </div>
            </nav>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div class="main">
                <h1>PROF"X AirLine Reservation System</h1>
                <p>ARCA is a Decentralised Autonomous Organisation created<br></br> to promote decentralization of the Arweave Blockchain ecosystem.</p>
                <h2>Join the PROF"X Community</h2>
                <p><a onClick={signup}>SignUp</a></p>
            </div>
        </div>
    );
}
export default Home;