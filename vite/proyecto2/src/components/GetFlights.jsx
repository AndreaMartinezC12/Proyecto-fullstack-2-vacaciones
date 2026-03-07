import React, { useState } from "react";
import axios from "axios";

export default function FlightSearch() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  const searchFlights = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "http://localhost:5000/api/flights",
        {
          params: {
            engine: "google_flights",
            departure_id: "CUU",
            arrival_id: "CUN",
            outbound_date: "2026-07-10",
            return_date: "2026-07-15",
            currency: "MXN",
            hl: "en",
            gl: "us",
            api_key: "9d7d027cff59c9d81a06238f00abeb0574471f5da88e2ad8b7b5021c7002d8af"
          }
        }
      );

      setFlights(response.data.best_flights || []);
    } catch (error) {
        console.log("this is errors", error.code)
        setError(error.message)
    }

    setLoading(false);
  };

  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Search Flights</h2>
      <button onClick={searchFlights}>Search</button>

      {loading && <p>Loading...</p>}

      {flights.map((flight, index) => (
        <div key={index}>
          <p>Price:{flight.price}</p>
          <p>Total Duration: {flight.total_duration}</p>
          <p>Airline: {flight.flights[0].airline}</p>
        </div>
      ))}
    </div>
  );
}