import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Catalog, Certificates, Home, Sizes, SwimsuitDesign } from '../../pages'

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
        <Route
          path='blog'
          element={<Blog/>}
        />
        <Route
          path='catalog'
          element={<Catalog/>}
        />
        <Route
          path='swimsuit-design'
          element={<SwimsuitDesign/>}
        />
        <Route
          path='sizes'
          element={<Sizes/>}
        />
    </Routes>
  )
}

export default Main