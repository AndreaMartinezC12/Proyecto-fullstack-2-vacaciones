
export default function HotelInfo ({hotel}){
    return(
        <div className="hotel-card">
            <img src={hotel.thumbnail} alt={hotel.name} />
            <div className="hotel-info">
                <p>Nombre: {hotel.name}</p>
                <p className="location">Ubicacion: {hotel.gps_coordinates.latitude}, {hotel.gps_coordinates.longitude}</p>
                <p>Numero de estrellas: {hotel.hotel_class}</p>
                <p className="rating">Calificacion: {hotel.overall_rating}/5</p>
                <p className="price">Precio por noche: {hotel.price}</p>
            </div> 
        </div>
    )
}