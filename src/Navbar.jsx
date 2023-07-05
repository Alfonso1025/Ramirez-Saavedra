import React from "react"
import { Link } from "react-router-dom"
import './styles/Navbar.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineTool, AiOutlineMessage } from 'react-icons/ai';
import {GiTronArrow} from 'react-icons/gi'
import {GoLaw} from 'react-icons/go'


function Navbar(){

    return(
        <nav className="navbar-wrapper">
            <div className="nav-item">
               
                <Link to="/">
                    <AiOutlineHome style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Sitio</p>
            </div>
            <div className="nav-item">
                <Link to="/trayectoria"> 
                    <GiTronArrow style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Trayectoria</p>
            </div>
            <div  className="nav-item">
                <Link to="/about">
                   <AiOutlineUser style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Acerca de</p>
            </div>
            <div className="nav-item">
                <Link to="/areasdepractica">
                    <GoLaw style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Areas de practica</p>
            </div>

            <div  className="nav-item">
                <Link to="/contact">
                    <AiOutlineMessage style={{fontSize: '30px',color:'#a39f9fd1'}}/>
                </Link>
                <p className="nav-text">Contacto</p>
            </div>
      </nav>
    )
}

export default Navbar