import React from 'react'
import {BrowserRouter, Routes, Route, Router, Link , NavLink} from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
    </Routes>
    </BrowserRouter>
  )
}
export default Router