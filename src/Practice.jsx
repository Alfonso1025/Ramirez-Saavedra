import React, { useState } from "react"
import PracticeCard from "./PracticeCard"
import './styles/Practice.css'


function Projects(){
const [isOpenArea, setIsOpenArea] = useState(false)
const [areaDescription, setAreaDescription] = useState('')
const [areaList, setAreaList] = useState([])
const [areaTitle, setAreaTitle] = useState('')
const areasArray = [

    {   
        
        title : 'Derecho de familia',
        description: ` En Ramírez Saavedra, somos líderes en litigio familiar, brindando servicios legales de alta 
        calidad en matrimonio, divorcio, custodia de hijos y otros asuntos familiares. 
        Nuestro enfoque personalizado se adapta a tus necesidades, protegiendo tus derechos. 
        En Ramírez Saavedra, valoramos la importancia de tu familia y estamos aquí para ayudarte.`,
        list: ['divorcio', 'pensión alimenticia', 'patria postestad', 'derechos de custodia y visita']
        
        
    },
    {   
        title : 'Derecho sucesorio',
        description: `lideramos en el litigio de derecho sucesorio. Resolvemos 
        disputas de herencias, testamentos y sucesiones, brindando un enfoque personalizado en 
        cada caso. Nuestra experiencia y liderazgo nos respaldan en este campo. Confía en 
        nosotros para representarte eficazmente.`,
        list : ['juicio sucesorio intestamentario', 'juicio sucesorio testamentario']
        
    },

    {   
        title : 'Bienes inmuebles',
        description : `Somos especialistas en litigio inmobiliario. 
        Representamos a nuestros clientes en casos relacionados con la propiedad de inmuebles, 
        incluyendo prescripción, disputas de propiedad y posesión otros asuntos ralasionados con bienes
        raices.`,
        list: ['prescripcion postiva', 'juicio de eviccion', 'asuntos registrales']
        
       
    },
    {
        title :'Contratos civiles y mercantiles',
        description : `Contamos con una larga trayectoria en asuntos relacionados con contratos 
        civiles. En Ramírez Saavedra, hemos acumulado una valiosa experiencia en redacción, 
        negociación y resolución de disputas contractuales. Nuestra firma se ha destacado en 
        este campo, adaptando soluciones legales a las necesidades y objetivos de nuestros 
        clientes. Garantizamos contratos sólidos y claros en todos los aspectos relevantes, 
        brindando una representación legal sólida para proteger los derechos e intereses de 
        nuestros clientes`,
        list : [`compraventa de inmuebles`, 'arrendamiento de bienes inmuebles', 'responsabilodad por incumplimeinto contractula', 'juicio de nulidad']
        
        
    },
    {
        title :'Juicio de amparo',
        description : `En Ramírez Saavedra, ofrecemos servicios legales en el área de juicio 
        de amparo. Nos enfocamos en proteger los derechos constitucionales de nuestros clientes
         y brindarles la asistencia legal necesaria frente a actos o decisiones que puedan 
         afectar sus intereses. Nuestro objetivo principal es comprender las necesidades de 
         cada caso y proporcionar una representación legal sólida. `,
        list : ['juicio de amparo directo', 'juicio de amparo indirecto']
        
    },
    


]


    return(
        <>
        
        {
            !isOpenArea &&
            
            <div className="cards-grid">

              {
                  areasArray.map((area, index)=>{
                      return(
                          <PracticeCard 
                          setIsOpenArea={setIsOpenArea}
                          title={area.title} 
                          setAreaTitle = {setAreaTitle}
                          descript = {area.description}
                          areaList = {area.list}
                          setAreaDescription = {setAreaDescription}
                          setAreaList = {setAreaList}
  
                          
                          />
                      )
                     
  
  
                  })
              }
              
            </div>
            
        }
        {
            isOpenArea &&
            <div className="law-firm-area">
                <h2 className="area-title">{areaTitle}</h2>
                <p className="area-description">{areaDescription}</p>
                <ul className="area-list">
                {areaList.map((item, index) => (
                    <li
                    key={index}
                    className='area-list-item'
                    >
                    {item}
                    </li>
                ))}
            </ul>
    </div>
        }
      
            
      </>
    )
}

export default Projects
