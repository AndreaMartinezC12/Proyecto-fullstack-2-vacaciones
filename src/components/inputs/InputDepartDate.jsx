import { useState } from "react";

export default function InputDepartDate({departDate,setDepartDate}){

    return(
        <>
        <input
            type= "date"
            value = {departDate}
            onChange={(e) => setDepartDate(e.target.value)}
        />
        <p>Hola, {departDate}</p>
        </>
    )
}