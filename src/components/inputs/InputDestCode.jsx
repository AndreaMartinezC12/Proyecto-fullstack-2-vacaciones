import { useState } from "react";

export default function InputDestCode({destCode,setDestCode}){

    return(
        <>
        <input
            type= "text"
            value = {destCode}
            onChange={(e) => setDestCode(e.target.value)}
        />
        <p>Hola, {destCode}</p>
        </>
    )
}