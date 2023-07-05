import React from "react"
import profilePic from './media/profile_portfolio-removebg-preview.png'
import logoName from './media/logoName1.png'
import './styles/Header.css'
function Header(){

    return(
        <div className="header-wrapper">
            <img src={profilePic} alt="profile" className="header-pic"/>
            <div>
             <img src={logoName} alt="" />
            </div>
            
        </div>
    )
}

export default Header 