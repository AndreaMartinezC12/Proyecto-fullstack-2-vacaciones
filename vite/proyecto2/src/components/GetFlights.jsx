import React, { useState } from "react";
import axios from "axios";

export default function FlightSearch({destCode}) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  const destinationCode = {destCode}

  const searchFlights = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "http://localhost:5000/api/flights",
        {
          params: {
            engine: "google_flights",
            departure_id: "CUU",
            arrival_id: "MTY",
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
      <p>el dest code es: {destCode}</p>
      <button onClick={searchFlights}>Search</button>

      {flights.map((flight, index) => (
        <div key={index}>
          <p>Aerolinea: {flight.flights[0].airline}</p>
          <p>Aeropuerto de salida: {flight.flights[0].departure_airport.name}</p>
          <p>Aeropuerto de llegada: {flight.flights[0].arrival_airport.name}</p>
          <p>Cantidad de escalas: </p>
          <p>Escala: </p>
          <p>Hora de salida: {flight.flights[0].departure_airport.time}</p>
          <p>Hora de llegada: {flight.flights[0].arrival_airport.time}</p>
          <p>Tipo de avion: {flight.flights[0].airplane}</p>
          <p>Numero de vuelo: {flight.flights[0].flight_number}</p>
          <p>Precio: {flight.price}</p>
          <p>Duracion del vuelo: {flight.total_duration}</p>
          <br/>
          
        </div>
      ))}
    </div>
  );
}