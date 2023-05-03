//Imports basiques React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Imports des pages
import Home from './pages/home'
import Accomodation from './pages/accomodation'
import About from './pages/about'

//Imports des composants
import Header from './components/header'
import Footer from './components/footer'
import Error from './components/error'

//Import du style
import './style/header.css'
import './style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
      <React.StrictMode>
            <BrowserRouter>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route
                              path="/accomodation"
                              element={<Accomodation/>}
                        ></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="*" element={<Error/>}></Route>
                  </Routes>
                  <Footer />
            </BrowserRouter>
      </React.StrictMode>
)
