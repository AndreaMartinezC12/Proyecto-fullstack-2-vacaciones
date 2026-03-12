import React, { useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";

export default function FlightSearch({destCode, origCode, departDate, returnDate, peopleQty, destination}) {
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
            departure_id: origCode,
            arrival_id: destCode,
            outbound_date: departDate,
            return_date: returnDate,
            currency: "MXN",
            hl: "en",
            gl: "us",
            api_key: "9d7d027cff59c9d81a06238f00abeb0574471f5da88e2ad8b7b5021c7002d8af"
          }
        }
      );
      const data = response.data

      const flightArray= []
      for (let i=0; i<data.length; i+=2){
        flightArray.push({
            departure: data[i],
            return: data[i+1],
            price: data[i].price
        })
      }

      setFlights(flightArray);

    } catch (error) {
        console.log("this is errors", error.code)
        setError(error.message)
    }

    setLoading(false);
  };

  if (error) return <p>{error}</p>

  return (
    <div>
        <h2>Vuelos</h2>
        <h2>El valor que pase: {destination}</h2>
        
        <button onClick={searchFlights}>Busqueda</button>
        <br/>
        {flights.map((flight, index) => (
            <div key={index}>
                <h3>Opcion {index + 1}</h3>
                <p>Precio: {flight.price}</p>
                <h4>Vuelo de ida</h4>
                <p>Aerolinea: {flight.departure.airline_dep}</p>
                <p>Aeropuerto de origen: {flight.departure.departureairport_dep}</p>
                <p>Hora de la salida: {flight.departure.departuretime_dep}</p>
                <p>Aeropuerto destino: {flight.departure.arrivalairport_dep}</p>
                <p>Hora de llegada: {flight.departure.arrivaltime_dep}</p>
                <p>Numero de escalas: {flight.departure.layoverqty_dep}</p>
                <p>Escalas:</p>
                {flight.departure.layovers_dep && flight.departure.layovers_dep.length > 0? (
                    flight.departure.layovers_dep.map((layover, index)=> (
                        <div key={index}>
                            <p>Aeropuerto: {layover.name}</p>
                            <p>Duracion: {layover.duration} minutos</p>
                        </div>
                    ))
                ): (<p>Vuelo directo</p>)}
                <p>Numero del vuelo: {flight.departure.flightnumber_dep}</p>
                <p>Tipo de avion: {flight.departure.airplane_dep}</p>
                <p>Duracion del vuelo: {flight.departure.totalduration_dep} minutos</p>
                <br/>

                <h4>Vuelo de regreso</h4>
                <p>Aerolinea: {flight.return.airline_ret}</p>
                <p>Aeropuerto de origen: {flight.return.departureairport_ret}</p>
                <p>Hora de la salida: {flight.return.departuretime_ret}</p>
                <p>Aeropuerto destino: {flight.return.arrivalairport_ret}</p>
                <p>Hora de llegada: {flight.return.arrivaltime_ret}</p>
                <p>Numero de escalas: {flight.return.layoverqty_ret}</p>
                <p>Escalas:</p>
                {flight.return.layovers_ret && flight.return.layovers_ret.length > 0? (
                    flight.return.layovers_ret.map((layover, index)=> (
                        <div key={index}>
                            <p>Aeropuerto: {layover.name}</p>
                            <p>Duracion: {layover.duration} minutos</p>
                        </div>
                    ))
                ): (<p>Vuelo directo</p>)}
                <p>Numero del vuelo: {flight.return.flightnumber_ret}</p>
                <p>Tipo de avion: {flight.return.airplane_ret}</p>
                <p>Duracion del vuelo: {flight.return.totalduration_ret} minutos</p>
                <br/>
            </div>
        ))}
   
    </div>
    
  );
}