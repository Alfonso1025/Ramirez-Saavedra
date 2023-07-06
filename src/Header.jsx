import React from "react"
import logo from './media/logo.png'
import logoName from './media/logoName.png'
import './styles/Header.css'
function Header(){

    return(
        <div className="header-wrapper">
            <img src={logo} alt="profile" className="header-pic"/>
            <div>
             <img src={logoName} alt="" />
            </div>
            
        </div>
    )
}

export default Header 