import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar  from './components/navbar';
import HeroSlider from './components/heroslider';
const App =()=> (
   <BrowserRouter>
     <Navbar/>
     <HeroSlider/>
   </BrowserRouter>
)
  

  


export default App
