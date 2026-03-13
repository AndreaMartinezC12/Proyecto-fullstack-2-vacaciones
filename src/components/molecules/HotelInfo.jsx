export default function HotelInfo ({hotel}){
    return(
        <div>
            <img src={hotel.thumbnail} alt={hotel.name} />
            <p>Nombre: {hotel.name}</p>
            <p>Ubicacion: {hotel.gps_coordinates.latitude}, {hotel.gps_coordinates.longitude}</p>
            <p>Numero de estrellas: {hotel.hotel_class}</p>
            <p>Calificacion: {hotel.overall_rating}/5</p>
            <p>Precio por noche: {hotel.price}</p>
        </div>
    )
}