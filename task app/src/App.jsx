import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './companents/navbar/Navbar'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
