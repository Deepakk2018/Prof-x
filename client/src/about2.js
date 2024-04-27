import './about.css';

function About() {

    function home() {
        window.location.replace("/mainhome");
    }

    function services() {
        window.location.replace("/mainhome/Services");
    }

    function feedback() {
        window.location.replace("/mainhome/feedback");
    }

    function contact() {
        window.location.replace("/mainhome/contactus");
    }
    function Profile(){
        window.location.replace("/mainhome/profile");
      }
      function Logout(){
        window.location.replace("/");
      }
    return (
        <div className="about">
            <nav className="nav">
                <div className="nav-logo"></div>
                <div className="nav-menu" id="navMenu">
                    <ul>
                        <li><a href="javascript:void(0)" className="link" onClick={home}>Home</a></li>
                        <li><a href="#" className="link active">About</a></li>
                        <li><a href="javascript:void(0)" className="link" onClick={services}>Services</a></li>
                        <li><a href="javascript:void(0)" className="link" onClick={contact}>ContactUs</a></li>
                        <li><a href="javascript:void(0)" className="link" onClick={feedback}>Feedback</a></li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className="btn white-btn" id="loginBtn" onClick={Profile}>Profile</button>
                    <button className="btn" id="registerBtn" onClick={Logout}>Logout </button>
                </div>
                <div className="nav-menu-btn">
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h2>Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="eswar" alt="eswar" />
                        <div className="container">
                            <h2>A EASWARA SRI SAI VENKAT</h2>
                            <p className="title"></p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="deepak" alt="deepak" />
                        <div className="container">
                            <h2>Y.DEEPAK REDDY</h2>
                            <p className="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="umesh" alt="umesh" />
                        <div className="container">
                            <h2>V.UMESH REDDY</h2>
                            <p className="title">Designer</p>
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
