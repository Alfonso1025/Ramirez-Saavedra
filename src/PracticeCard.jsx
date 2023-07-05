import React from "react"
import './styles/Practice.css'
import { AiFillGithub } from 'react-icons/ai';

function PracticeCard(props){



const title = props.title



return(
    

    <div className="card-main">
            
        <h2 className="card-title">{title}</h2>
                
    </div>
  


    )
}

export default PracticeCard