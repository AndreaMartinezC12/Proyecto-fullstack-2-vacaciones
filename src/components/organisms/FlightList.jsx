import FlightInfo from "../molecules/FlightInfo"

export default function FlightList({flights}){
    return(
        <div className="flights-container">
            {flights.map((flight, index) => (
                <FlightInfo key={index} flight={flight} index={index} />
            ))}
        </div>
    )
}