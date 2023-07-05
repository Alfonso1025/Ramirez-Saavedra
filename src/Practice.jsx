import React, { useState } from "react"
import PracticeCard from "./PracticeCard"
import './styles/Practice.css'


function Projects(){
const [isOpenArea, setIsOpenArea] = useState(false)
const [areaDescription, setAreaDescription] = useState('')
const [areaList, setAreaList] = useState([])
const areasArray = [

    {   
        title : 'Derecho de familia',
        description: '',
        list: []
        
        
    },
    {   
        title : 'Derecho sucesorio',
        description: '',
        list : []
        
    },

    {   
        title : 'Bienes inmuebles',
        description : '',
        list: []
        
       
    },
    {
        title :'Contratos civiles y mercantiles',
        description : '',
        list : []
        
        
    },
    {
        title :'Juicio de amparo',
        description : '',
        list : []
        
    },
    


]

const openArea = ()=>{
   setIsOpenArea(true)

}
    return(
        <>
        <div className="cards-grid">
            {
                areasArray.map((area, index)=>{
                    return(
                        <PracticeCard 
                        
                        title={area.title} 
                        
                        />
                    )
                   


                })
            }
            
        </div>
            
        </>
    )
}

export default Projects
