import React from "react"
import './styles/Practice.css'
import { AiFillGithub } from 'react-icons/ai';

function PracticeCard(props){

//recibe props
const title = props.title
const setIsOpenArea = props.setIsOpenArea
const descript = props.descript
const list = props.areaList
const setAreaDescription = props.setAreaDescription
const setAreaList = props.setAreaList
const setAreaTitle = props.setAreaTitle



//function definition
const openArea = ()=>{
    setIsOpenArea(true)
    console.log('function called')
    setAreaDescription(descript)
    setAreaList(list)
    setAreaTitle(title)
    
 
 }



return(
    

    <div className="card-main" onClick={openArea}>
            
        <h2 className="card-title">{title}</h2>
                
    </div>
  


    )
}

export default PracticeCard