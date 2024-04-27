import './services.css';

function Services(){

    function About(){
        window.location.replace("/mainhome/about");
    }
    function home(){
        window.location.replace("/");
    }
    function home1(){
        window.location.replace("/mainhome");
    }
    function feedback(){
        window.location.replace("/mainhome/feedback");
    }
    function contact(){
        window.location.replace("/mainhome/contactus");
    }
    function Profile(){
        window.location.replace("/mainhome/profile");
      }
    return(
        <div className='serviece'>
        <nav className="nav">
        <div className="nav-logo">
        </div>
        <div className="nav-menu" id="navMenu">
            <ul>
                <li><a onClick={home1} className="link">Home</a></li>
                <li><a onClick={About} className="link">About</a></li>
                <li><a  className="link active">Services</a></li>
                <li><a onClick={contact} className="link">contact</a></li>
                <li><a onClick={feedback} className="link">Feedback</a></li>
            </ul>
        </div>
        <div className="nav-button">
            <button className="btn white-btn" id="loginBtn" onClick={Profile} >Profile</button>
            <button className="btn" id="registerBtn" onClick={home} >Logout</button>
        </div>
        <div className="nav-menu-btn">
            <i className="bx bx-menu" ></i>
        </div>
    </nav>
    <br></br><br></br><br></br><br></br>
        <body>
            <section class="services">
                <h2>Our Services</h2>
                <p>We Are commited to provide best services to user</p>
                <div class="service-container">
                <div class="service">
                    <i class="fas fa-lightbulb"></i>  <h3>Communication</h3>
                    <p>Sure! Effective communication is essential for conveying ideas, sharing information, and building relationships.</p>
                </div>
                <div class="service">
                    <i class="fas fa-palette"></i>  <h3>End to End Encryption</h3>
                    <p>This ensures that even if the communication is intercepted, the interceptor cannot read its contents..</p>
                </div>
                <div class="service">
                    <i class="fas fa-code"></i>  <h3>User friendly interface</h3>
                    <p>A user-friendly interface is designed with the user's needs, preferences, and capabilities in mind to make interactions with a system or product intuitive, efficient, and enjoyable. .</p>
                </div>
                <div class="service">
                    <i class="fas fa-laptop"></i>  <h3>Security</h3>
                    <p>
            Security in the context of software and digital systems involves protecting data, resources, and systems from unauthorized access, manipulation, or destruction..</p>
                </div>
                <div class="service">
                    <i class="fas fa-share-alt"></i>  <h3>Comfort</h3>
                    <p>Creating a comfortable experience for customers is crucial for building positive relationships and fostering loyalty.</p>
                </div>
                <div class="service">
                    <i class="fas fa-shopping-cart"></i>  <h3>Customer safety</h3>
                    <p>Customer safety is paramount in any business, especially in industries where products or services directly impact the well-being of consumers. </p>
                </div>
                </div>
            </section>
        </body>
    </div>   
    );
}

export default Services;
