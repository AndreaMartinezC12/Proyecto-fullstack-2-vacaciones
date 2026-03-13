import React from "react";
import { useState, useEffect } from "react";
// import InputDepartDate from "../inputs/InputDepartDate";
// import InputDestCode from "../inputs/InputDestCode";
import FormSection from "../molecules/FormSection";
import Button from "../atoms/Button";
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
            <div className="hero-header">
                <img
                    src="https://staffordshireliving.co.uk/wp-content/uploads/2024/06/anse-source-d-argent-beach-la-digue-island-seysh-2023-12-19-03-33-50-utc-scaled.jpg"
                    alt="Beach"
                    className="hero-image"
                />
                <h1 className="hero-title">Arma tus vacaciones</h1>
                <h4 className="hero-subtitle">Encuentra los mejores vuelos y hoteles en un mismo lugar</h4>
                
            </div>
            <form onSubmit={doSubmit} class="flight-form">
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