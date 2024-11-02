import React from "react"
import Navbar from "./component/Navbar/NavBar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Coin from "./pages/coin/Coin"
import Footer from "./component/footer/Footer"


function App() {
  return(
  <div className='app'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/coin/:coinId" element={<Coin/>}></Route>
    </Routes>
    <Footer/>
  </div>
  )
}

export default App
