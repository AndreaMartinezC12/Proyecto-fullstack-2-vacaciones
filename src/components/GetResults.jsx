import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { data } from "react-router-dom";
import FlightList from "./organisms/FlightList";
import HotelList from "./organisms/HotelList";


export default function ResultSearch({destCode, origCode, departDate, returnDate, peopleQty, destination}) {
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("flights")

  useEffect(()=>{
        searchResults()
    },[])

  const searchResults = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "/api/flights",
        // "http://localhost:5000/api/flights",
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

      const responseHotels = await axios.get(
        "/api/hotels",
        // "http://localhost:5000/api/hotels",
        {
          params: {
            engine: "google_hotels",
            location: destination,
            check_in: departDate,
            check_out: returnDate,
            people: peopleQty,
            currency: "MXN",
            hl: "en",
            gl: "us",
            api_key: "9d7d027cff59c9d81a06238f00abeb0574471f5da88e2ad8b7b5021c7002d8af"
          }
        }
      );

      setHotels(responseHotels.data.ads || []);

    } catch (error) {
        console.log("this is errors", error.code)
        setError(error.message)
        setLoading(false)
    }finally{
      setLoading(false)
    }
  };

  if(loading) 
      return(
          <div className="loading-container">
              <div className="spinner"></div>
              <p>Buscando...</p>
          </div>
      ) 

  if (error) return <p>{error}</p>

  return (
    <div className="results-container">
      <div className="results-header">
        <img
            src="https://static0.simpleflyingimages.com/wordpress/wp-content/uploads/2023/06/shutterstock_2056218710-2.jpg"
            alt="Destino"
            className="results-image"
        />       
      </div>

      <div className="results-title">
        <h1>Viajando a: {destination}</h1>
        <p>Resultados de la busqueda</p>
      </div>

      <div className="tabs">
          <button 
          className={activeTab == "flights" ? "tab active" : "tab"}
          onClick={() => setActiveTab("flights")}>Vuelos</button>
          <button 
          className={activeTab == "hotels" ? "tab active" : "tab"}
          onClick={() => setActiveTab("hotels")}>Hoteles</button>
      </div>
      {activeTab == "flights" && (
        <FlightList flights={flights}/>
              
      )}
      
      {activeTab == "hotels" && (
        <HotelList hotels={hotels}/>
      )}
    </div>
    
  );
}