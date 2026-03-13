import HotelInfo from "../molecules/HotelInfo";

export default function HotelList({hotels}){
    return(
        <div>
            {hotels.map((hotel, index) => (
                <HotelInfo key={index} hotel={hotel}/>
            ))}
        </div>
    )
}