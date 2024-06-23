import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Home } from '../../pages'

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
    </Routes>
  )
}

export default Main