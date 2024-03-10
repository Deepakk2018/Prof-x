function Mainhome(){
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
    function home(){
        window.location.replace('/');
    }
    function bookticket(){
        window.location.replace('/mainhome/bookticket')
    }
    return(
        <div  div className="wrapper">
            <nav className="nav">
                <div className="nav-logo">
                </div>
                <div className="nav-menu" id="navMenu">
                    <ul>
                        <li><button0 onClick={home} className="link active">Home</button0></li>
                        <li><button0 onClick={About} className="link">About</button0></li>
                        <li><button0 onClick={services} className="link">Services</button0></li>
                        <li><button0 onClick={contact} className="link">Contact</button0></li>
                        <li><button0 onClick={feedback} className="link">Feedback</button0></li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className="btn white-btn" id="loginBtn" >Profile</button>
                    <button className="btn" id="registerBtn" onClick={signup} >Logout</button>
                </div>
            </nav>
                        <main>
            <div class="intro">
                <h1>Let's Discover | The World Together</h1>
                <p>One of the leading online booking engine providers EXCLUSIVELY for travel agencies. Our aim is to provide you with a fast
and easy online access to the products your clients are asking for, wherever and whenever that may be.</p>
                <button onClick={bookticket}>LETS START JOURNEY</button>
                </div>
    </main>
  </div>
  
    );
}
export default Mainhome;