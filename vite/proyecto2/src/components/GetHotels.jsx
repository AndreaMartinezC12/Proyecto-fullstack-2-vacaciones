import React, { useState } from "react";
import axios from "axios";

export default function HotelSearch() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  const searchHotels = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "http://localhost:5000/api/hotels",
        {
          params: {
            engine: "google_hotels",
            location: "monterrey",
            check_in: "2026-07-10",
            check_out: "2026-07-15",
            people: "2",
            currency: "MXN",
            hl: "en",
            gl: "us",
            api_key: "9d7d027cff59c9d81a06238f00abeb0574471f5da88e2ad8b7b5021c7002d8af"
          }
        }
      );

      setHotels(response.data.ads || []);
    } catch (error) {
        console.log("this is errors", error.code)
        setError(error.message)
    }

    setLoading(false);
  };

  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Search Hotels</h2>
      <button onClick={searchHotels}>Search</button>

      {loading && <p>Loading...</p>}

      {hotels.map((hotel, index) => (
        <div key={index}>
          <p>Price:{hotel.price}</p>
          <p>Name: {hotel.name}</p>
        </div>
      ))}
    </div>
  );
}