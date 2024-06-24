import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Certificates, Home } from '../../pages'

const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        />
        <Route
          path='about'
          element={<About/>}
        />
        <Route
          path='certificates'
          element={<Certificates/>}
        />
    </Routes>
  )
}

export default Main