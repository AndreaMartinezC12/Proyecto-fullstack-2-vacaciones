import React from "react";
import { useState, useEffect } from "react";
import "./SearchData.css"
// import InputDepartDate from "../inputs/InputDepartDate";
// import InputDestCode from "../inputs/InputDestCode";
import FormSection from "../molecules/FormSection";
import Button from "../Atoms/Button";
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

            <FormSection
            label= "Destino al que viajas"
            type= "text"
            placeholder= "Nombre de tu destino"
            onChange={(e) => setDestination(e.target.value)}
            />

            <FormSection
            label= "Aeropuerto de origen:"
            type= "text"
            placeholder="Aeropuerto de origen"
            onChange={(e) => setOrigCode(e.target.value)}
            />

            <FormSection
            label = "Aeropuerto de destino:"
            type= "text"
            placeholder="Aeropuerto de destino"
            onChange={(e) => setDestCode(e.target.value)}
            />

            <FormSection
            label="Fecha de salida:"
            type= "date"
            placeholder="Fecha de salida"
            onChange={(e) => setDepartDate(e.target.value)}
            />

            <FormSection
            label="Fecha de regreso:"
            type= "date"
            placeholder="Fecha de regreso"
            onChange={(e) => setReturnDate(e.target.value)}
            />

            <FormSection
            label="Cantidad de personas:"
            type= "number"
            placeholder="Cantidad de personas"
            onChange={(e) => setPeopleQty(e.target.value)}
            />

            <Button type="submit" text="Buscar"/>

        </form>
        </>
    )
}