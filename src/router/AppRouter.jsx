import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/Global.styles';
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <GlobalStyles/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default AppRouter