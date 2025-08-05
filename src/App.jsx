import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home'
import Restaurant from './Components/Restaurant'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restaurants' element={<Restaurant />} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App