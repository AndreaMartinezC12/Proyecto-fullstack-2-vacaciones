
export default function FlightInfo({flight, index}){
    return(
        <div className="flight-card">
            <div className="flight-header">
                <h3>Opcion {index + 1}</h3>
                <span className="price">${flight.price} MXN</span>
            </div>

            <p className="flight-direction">Vuelo de ida:  
                     {new Date(flight.departure.departuretime_dep).toLocaleDateString()}
                    {/* {flight.departure.departuretime_dep.split("")[0]} */}
            </p>

            <div className="flight-route">               
                <div className="airport">
                    <p className="time">{flight.departure.departuretime_dep.substring(11,16)}</p>
                    <p>{flight.departure.departureairport_dep}</p>                 
                </div>

                <div className="arrow">
                    <span>→</span>
                </div>

                <div className="airport">
                    <p className="time">
                        
                        {flight.departure.arrivaltime_dep.substring(11,16)}
                        </p>
                    <p>{flight.departure.arrivalairport_dep}</p>                 
                </div>
            </div>

            <div className="flight-info">
                <p><strong>Aerolinea:</strong> {flight.departure.airline_dep}</p>
                <p><strong>Numero de escalas:</strong> {flight.departure.layoverqty_dep}</p>
                <p><strong>Escalas:</strong></p>
                    {flight.departure.layovers_dep && flight.departure.layovers_dep.length > 0? (
                        flight.departure.layovers_dep.map((layover, index)=> (
                            <div key={index}>
                                <p>Aeropuerto: {layover.name}</p>
                                <p>Duracion: {layover.duration} minutos</p>
                            </div>
                        ))
                    ): (<p>Vuelo directo</p>)}
                <p><strong>Numero del vuelo:</strong> {flight.departure.flightnumber_dep}</p>
                <p><strong>Tipo de avion:</strong> {flight.departure.airplane_dep}</p>
                <p><strong>Duracion del vuelo:</strong> {flight.departure.totalduration_dep} minutos</p>
            </div>

            <div className="divider"></div>

            <br/>

            <p className="flight-direction">Vuelo de regreso:  
                     {new Date(flight.return.departuretime_ret).toLocaleDateString()}
            </p>

            <div className="flight-route">
                
                <div className="airport">
                    <p className="time">{flight.return.departuretime_ret.substring(11,16)}</p>
                    <p>{flight.return.departureairport_ret}</p>                 
                </div>

                <div className="arrow">
                    <span>→</span>
                </div>

                <div className="airport">
                    <p className="time">{flight.return.arrivaltime_ret.substring(11,16)}</p>
                    <p>{flight.return.arrivalairport_ret}</p>                 
                </div>
            </div>

            <div className="flight-info">
                <p>Aerolinea: {flight.return.airline_ret}</p>
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
            </div>        
        </div>
    )
}