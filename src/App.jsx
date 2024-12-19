import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import Newscontainer from './components/Newscontainer'
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
        <NavBar />
        <Routes>

          <Route exact path="/" element={<Newscontainer key="general" type="general" />} />
          <Route exact path="/entertainment" element={<Newscontainer key="entertainment" type="entertainment" />} />
          <Route exact path="/health" element={<Newscontainer key="health" type="health" />} />
          <Route exact path="/science" element={<Newscontainer key="science" type="science" />} />
          <Route exact path="/sports" element={<Newscontainer key="sports" type="sports" />} />
          <Route exact path="/technology" element={<Newscontainer key="technology" type="technology" />} />
          <Route exact path="/business" element={<Newscontainer key="business" type="business" />} />
        </Routes>
    </div>
  )
}

