import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../pages/Home'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>     
    </>
  )
}

export default Router
