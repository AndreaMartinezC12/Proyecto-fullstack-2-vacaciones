import React from "react";
import { useState, useEffect } from "react";
import "./SearchData.css"
// import InputDepartDate from "../inputs/InputDepartDate";
// import InputDestCode from "../inputs/InputDestCode";
import { useNavigate } from "react-router-dom";

export default function SearchData({setDestCode, setOrigCode, setDepartDate, setReturnDate, setPeopleQty, setDestination}){
    const navigate = useNavigate()
    //const [destCode, setDestCode] = useState("")

    const doSubmit = (e) =>{
        e.preventDefault()

        navigate("/results")
    }

    return(
        <>
        <form onSubmit={doSubmit} class="flight-form">
            <h1>Arma tus vacaciones</h1>
            <p>A donde quieres viajar?</p>
            <input
            type= "text"
            placeholder= "Nombre de tu destino"
            onChange={(e) => setDestination(e.target.value)}
            />

            <p>Aeropuerto de origen:</p>
            <input
            type= "text"
            placeholder="Aeropuerto de origen"
            onChange={(e) => setOrigCode(e.target.value)}
            />

            <p>Aeropuerto de destino:</p>
            <input
            type= "text"
            placeholder="Aeropuerto de destino"
            onChange={(e) => setDestCode(e.target.value)}
            />

            <p>Fecha de salida:</p>
            <input
            type= "date"
            placeholder="Fecha de salida"
            onChange={(e) => setDepartDate(e.target.value)}
            />

            <p>Fecha de regreso:</p>
            <input
            type= "date"
            placeholder="Fecha de regreso"
            onChange={(e) => setReturnDate(e.target.value)}
            />

            <p>Numero de personas:</p>
            <input
            type= "number"
            placeholder="Numero de personas"
            onChange={(e) => setPeopleQty(e.target.value)}
            />



            <p>Holiiiis</p>
            <button type="submit" class="search-button">Search</button>

        </form>
        </>
    )
}