
import './App.css'
import Footer from './components/Footer'
import FlightSearch from './components/GetFlights'
import HotelSearch from './components/GetHotels'
import SearchData from './components/forms/SearchData'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


function App() {
  const [destCode, setDestCode] = useState(null)
  const [origCode, setOrigCode] = useState(null)
  const [departDate, setDepartDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [peopleQty, setPeopleQty] = useState(null)
  const [destination, setDestination] = useState(null)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchData setDestCode={setDestCode} setOrigCode={setOrigCode} setDepartDate={setDepartDate} setReturnDate={setReturnDate} setPeopleQty={setPeopleQty} setDestination={setDestination}/>} />
          <Route path="/results" element={<FlightSearch destCode={destCode} origCode={origCode} departDate={departDate} returnDate={returnDate} peopleQty={peopleQty} destination={destination}/>}/>
          <Route path="/hotels" element={<HotelSearch/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
