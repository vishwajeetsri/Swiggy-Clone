import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home'
import Restaurant from './Components/Restaurant'
import RestaurantMenu from './Components/RestaurantMenu'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restaurants' element={<Restaurant />} />
      <Route path='/city/delhi/:id' element={<RestaurantMenu />}></Route>
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App