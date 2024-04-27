import React, { useState, useEffect } from 'react';
import './searchflight.css'; // Ensure this path is correct

function users() {
    window.location.replace("/mainhome/userdetails");
}

const FlightList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState(null);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [selectedSeat, setSelectedSeat] = useState(null);

    useEffect(() => {
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const setAvailableFlights = (flights) => {
            setFlights(flights);
        };

        const fetchAvailableFlights = async () => {
            try {
                // Simulated API call delay
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Simulated response data with seats
                const responseData = {
                    flights: [
                        { id: 1, number: 'Indigo co-1', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 2, number: 'Air Indiaco-1', seats: ['A1', 'A2', 'B1', 'B2', 'B3'] },
                        { id: 3, number: 'Air India Express co-1', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 4, number: 'Air Asia India co-1', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 5, number: 'Air Asia co-1', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 6, number: 'Akasa Air co-1', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 7, number: 'Vistara co-1', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 8, number: 'Go First co-1', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 9, number: 'SpiceJet co-1', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 10, number: 'Emirates co-1', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 11, number: 'Indigo co-2', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 12, number: 'Air India co-2', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 13, number: 'Air India Express co-2', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 14, number: 'Air Asia India v', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 15, number: 'Air Asia co-2', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 16, number: 'Akasa Air co-2', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 17, number: 'Vistara co-2', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 18, number: 'Go First co-2', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 19, number: 'SpiceJet co-2', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                        { id: 20, number: 'Emirates co-2', seats: ['A1', 'A2', 'A3', 'B1', 'B2'] },
                    ]
                };

                // Shuffle the flights array randomly
                const shuffledFlights = shuffleArray(responseData.flights);

                // Randomly select 4 seats for each flight
                const flightsWithRandomSeats = shuffledFlights.map(flight => ({
                    ...flight,
                    seats: shuffleArray(flight.seats).slice(0, 4)
                }));

                // Select only the first two shuffled flights
                const selectedFlights = flightsWithRandomSeats.slice(0, 5);

                setAvailableFlights(selectedFlights);
                setIsLoading(false);
            } catch (error) {
                setError('Failed to fetch available flights');
                setIsLoading(false);
            }
        };

        // Call the function to fetch available flights
        fetchAvailableFlights();
    }, []);

    const handleSelectFlight = (event) => {
        const flightNumber = event.target.value;
        setSelectedFlight(flightNumber);
        setSelectedSeat(null); // Reset selected seat when flight changes
    };

    const handleSelectSeat = (event) => {
        const seatNumber = event.target.value;
        setSelectedSeat(seatNumber);
    };
    function signup(){
        window.location.replace("/mainhome/regestration");
    }
    function About(){
        window.location.replace("/mainhome/about");
    }
    function services(){
        window.location.replace("/mainhome/Services");
    }
    function feedback(){
        window.location.replace("/mainhome/feedback");
    }
    function contact(){
        window.location.replace("/mainhome/contactus");
    }
    function home(){
        window.location.replace('/mainhome');
    }
    function bookticket(){
        window.location.replace('/mainhome/bookticket');
    }
    function profile(){
        window.location.replace('/mainhome/profile');
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
                        <button className="btn white-btn" id="loginBtn" onClick={profile} >Profile</button>
                        <button className="btn" id="registerBtn" onClick={signup} >Logout</button>
                    </div><br></br>
                </nav>    
        <div className="popup-container">
            <h1>Search Available Flights</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    <select className="select-box" onChange={handleSelectFlight}>
                        <option value="">Select a flight</option>
                        {flights.map(flight => (
                            <option key={flight.id} value={flight.number}>{flight.number}</option>
                        ))}
                    </select>
                    {selectedFlight && (
                        <div className='pcv'>
                            <p>Selected Flight: {selectedFlight}</p>
                            <p>Select Seat:</p>
                            <select className="select-box" onChange={handleSelectSeat}>
                                <option value="">Select a seat</option>
                                {flights.find(flight => flight.number === selectedFlight).seats.map(seat => (
                                    <option key={seat} value={seat}>{seat}</option>
                                ))}
                            </select>
                            {selectedSeat && <p>Selected Seat: {selectedSeat}</p>}
                        </div>
                    )}
                </div>
            )}
            <button className='button' onClick={users}>Submit</button>
        </div>
    </div>    
    );
};

export default FlightList;
