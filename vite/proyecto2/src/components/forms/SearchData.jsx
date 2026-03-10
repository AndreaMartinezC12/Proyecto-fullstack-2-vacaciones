import React from "react";
import { useState, useEffect } from "react";
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
        <form onSubmit={doSubmit}>
            <h1>Arma tus vacaciones</h1>
            <p>A donde quieres viajar?</p>
            <input
            type= "text"
            placeholder= "Nombre de tu destino"
            className="bg-amber-900"
            onChange={(e) => setDestination(e.target.value)}
            />

            <p>Aeropuerto de origen:</p>
            <input
            type= "text"
            placeholder="Aeropuerto de origen"
            className="bg-amber-900"
            onChange={(e) => setOrigCode(e.target.value)}
            />

            <p>Aeropuerto de destino:</p>
            <input
            type= "text"
            placeholder="Aeropuerto de destino"
            className="bg-amber-900"
            onChange={(e) => setDestCode(e.target.value)}
            />

            <p>Fecha de salida:</p>
            <input
            type= "date"
            placeholder="Fecha de salida"
            className="bg-amber-900"
            onChange={(e) => setDepartDate(e.target.value)}
            />

            <p>Fecha de regreso:</p>
            <input
            type= "date"
            placeholder="Fecha de regreso"
            className="bg-amber-900"
            onChange={(e) => setReturnDate(e.target.value)}
            />

            <p>Numero de personas:</p>
            <input
            type= "number"
            placeholder="Numero de personas"
            className="bg-amber-900"
            onChange={(e) => setPeopleQty(e.target.value)}
            />



            <p>Holiiiis</p>
            <button type="submit">Search</button>

        </form>
        </>
    )
}