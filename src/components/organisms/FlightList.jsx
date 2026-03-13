import FlightInfo from "../molecules/FlightInfo"

export default function FlightList({flights}){
    return(
        <div>
            {flights.map((flight, index) => (
                <FlightInfo key={index} flight={flight} index={index} />
            ))}
        </div>
    )
}