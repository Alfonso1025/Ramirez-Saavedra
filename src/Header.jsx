import React from "react"
import logo from './media/logo.png'
import logoName from './media/logoName2.png'
import './styles/Header.css'
function Header(){

    return(
        <div className="header-wrapper">
            <img src={logo} alt="profile" className="header-pic"/>
            <div>
             <img src={logoName} alt="" className="logoName" />
            </div>
            
        </div>
    )
}

export default Header 