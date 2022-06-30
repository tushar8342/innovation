import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Details from '../component/Details'
import Homepage from '../component/Homepage'

export default function AllRouters() {
  return (
      <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/:code' element={<Details />}></Route>
    </Routes>
  )
}
