import React, { useState } from 'react';
import './bookflight.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppBook() {
  const places = ["Vijayawada", "Delhi", "Mumbai", "Bangalore", "Chennai"];

  const [departurePlace, setDeparturePlace] = useState("");
  const [destinationPlace, setDestinationPlace] = useState("");
  const [flights, setFlights] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({ name: '', email: '' });
  const [isBookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  function checkout(){
    window.location.replace("/mainhome/checkout");
  }

  const searchFlights = () => {
    let availableFlights = [];

    switch (departurePlace) {
      case "Vijayawada":
        switch (destinationPlace) {
          case "Delhi":
            availableFlights = ["VJ-DL-001", "VJ-DL-002"];
            break;
          case "Mumbai":
            availableFlights = ["VJ-MB-001", "VJ-MB-002"];
            break;
          case "Bangalore":
            availableFlights = ["VJ-BG-001", "VJ-BG-002"];
            break;
          case "Chennai":
            availableFlights = ["VJ-CN-001", "VJ-CN-002"];
            break;
          default:
            availableFlights = [];
            break;
        }
        break;
      case "Delhi":
        switch (destinationPlace) {
          case "Vijayawada":
            availableFlights = ["DL-VJ-001", "DL-VJ-002"];
            break;
          case "Mumbai":
            availableFlights = ["DL-MB-001", "DL-MB-002"];
            break;
          case "Bangalore":
            availableFlights = ["DL-BG-001", "DL-BG-002"];
            break;
          case "Chennai":
            availableFlights = ["DL-CN-001", "DL-CN-002"];
            break;
          default:
            availableFlights = [];
            break;
        }
        break;
      case "Mumbai":
        switch (destinationPlace) {
          case "Vijayawada":
            availableFlights = ["MB-VJ-001", "MB-VJ-002"];
            break;
          case "Delhi":
            availableFlights = ["MB-DL-001", "MB-DL-002"];
            break;
          case "Bangalore":
            availableFlights = ["MB-BG-001", "MB-BG-002"];
            break;
          case "Chennai":
            availableFlights = ["MB-CN-001", "MB-CN-002"];
            break;
          default:
            availableFlights = [];
            break;
        }
        break;
      case "Bangalore":
        switch (destinationPlace) {
          case "Vijayawada":
            availableFlights = ["BG-VJ-001", "BG-VJ-002"];
            break;
          case "Delhi":
            availableFlights = ["BG-DL-001", "BG-DL-002"];
            break;
          case "Mumbai":
            availableFlights = ["BG-MB-001", "BG-MB-002"];
            break;
          case "Chennai":
            availableFlights = ["BG-CN-001", "BG-CN-002"];
            break;
          default:
            availableFlights = [];
            break;
        }
        break;
      case "Chennai":
        switch (destinationPlace) {
          case "Vijayawada":
            availableFlights = ["CN-VJ-001", "CN-VJ-002"];
            break;
          case "Delhi":
            availableFlights = ["CN-DL-001", "CN-DL-002"];
            break;
          case "Mumbai":
            availableFlights = ["CN-MB-001", "CN-MB-002"];
            break;
          case "Bangalore":
            availableFlights = ["CN-BG-001", "CN-BG-002"];
            break;
          default:
            availableFlights = [];
            break;
        }
        break;
      default:
        availableFlights = [];
        break;
    }

    displayAvailableFlights(availableFlights);
  };

  const displayAvailableFlights = (flights) => {
    setFlights(flights);
  };

  const handleBookingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleBookingConfirmation = () => {
    setBookingConfirmed(true);
  };
return (
    <div>
      <h1>Airline Reservation System</h1>
      <form>
        <select
          value={departurePlace}
          onChange={(e) => setDeparturePlace(e.target.value)}
          style={{ marginBottom: "20px" }}
        >
          <option value="">Select Departure Place</option>
          {places.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>
        <select
          value={destinationPlace}
          onChange={(e) => setDestinationPlace(e.target.value)}
          style={{ marginBottom: "20px" }}
        >
          <option value="">Select Destination Place</option>
          {places.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
            
          ))}
        </select>
        <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText='date'
            style={{ marginBottom: "20px" }}
            />
        <button
          type="button"
          onClick={searchFlights}
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          Search Flights
        </button>
      </form>

      {flights.length > 0 && (
        <div style={{ marginTop: "20px", maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
          <h2>Available Flights</h2>
          <ul>
            {flights.map((flight) => (
              <li key={flight}>{flight}</li>
            ))}
          </ul>
        </div>
      )}

      {flights.length > 0 && (
        <div>
          <h2>Book Your Flight</h2>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={bookingDetails.name}
              onChange={handleBookingDetailsChange}
              style={{ marginBottom: "10px" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={bookingDetails.email}
              onChange={handleBookingDetailsChange}
              style={{ marginBottom: "10px" }}
            />
            <button
              type="button"
              onClick={checkout}
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
            
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AppBook;