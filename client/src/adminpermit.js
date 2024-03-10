import React, { useState } from 'react';
import './adminpermit.css';

const AddFlightForm = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [price, setPrice] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const flightData = {
      flight_number: flightNumber,
      origin,
      destination,
      departure_time: departureTime,
      arrival_time: arrivalTime,
      price : price
    };

    try {
      const response = await fetch('https://localhost/admin/addflights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(flightData)
      });

      if (!response.ok) {
        throw new Error('Failed to add flight');
      }

      console.log('Flight added successfully');
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  return (
    <div>
        <h1>ADD FLIGHTS MODULE</h1>
   <div className='container1'>
    <formq onSubmit={handleSubmit}>
      <labelq>
        Flight Number:
        <input type="text" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
      </labelq>
      <label>
        Origin:
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
      </label>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </label>
      <label>
        Departure:
        <input type="datetime-local" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
      </label>
      <label>
        Arrival Time:
        <input type="datetime-local" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />
      </label>
      <label>
        Ticket Fare:
        <input type="rupees" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <buttonq type="submit">Add Flight</buttonq>
    </formq>
    </div> 
    </div>
  );
};

export default AddFlightForm;
