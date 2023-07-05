
import { useState } from "react"
import Header from "./Header";
import About from "./About";
import Contact from "./Contacto";
import Practice from "./Practice";
import Navbar from "./Navbar";
import Trayectoria from "./Trayectoria,";
import Home from "./Home";
import Footer from "./Footer";

import { Routes, Route} from 'react-router-dom'
import './styles/App.css'

function App() {
 
  
  return(
    <div className="app">
      <Header/>
      <Navbar/>
      
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/areasdepractica" element={<Practice/>}/>
         <Route path="/trayectoria" element={<Trayectoria/>}/>
         <Route path="/contacto" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
   
  ) 
}

export default App;
