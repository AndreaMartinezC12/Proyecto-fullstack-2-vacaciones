
import './App.css'
import Footer from './components/Footer'
import FlightSearch from './components/GetFlights'
import HotelSearch from './components/GetHotels'
import SearchData from './components/forms/SearchData'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


function App() {
  const [destCode, setDestCode] = useState(null)
  // const [destCode,setDestCode] = useState(null)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchData setDestCode={setDestCode}/>} />
          <Route path="/results" element={<FlightSearch destCode={destCode}/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
