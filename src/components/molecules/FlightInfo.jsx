export default function FlightInfo({flight, index}){
    return(
        <div>
            <p>---------------------------------------------------------------------------------------</p>
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
            <p>---------------------------------------------------------------------------------------</p>
            <br/>
        </div>
    )
}