import React, { useRef } from 'react';
import './styles/Trayectoria.css'
import profilePic from './media/profile_portfolio-removebg-preview.png'
import angel from './media/angel.png'


function Trayectoria(){
    
    const estudios = `El licenciado Saavedra se graduó como Licenciado en Derecho por la 
    Universidad Nacional Autónoma de México, Campus Ciudad Universitaria, en 1985 con la tesis
    El derecho mercantil mexicano. Posteriormente, en 1989, obtuvo una Maestría en 
    Derecho Mercantil en la misma institución.`
    const academia = `El licenciado Saavedra se ha desempeñado como docente de la asignatura
    "Contexto Socieconomico de México" en el Instituto Politecnico Nacional. Asimismo, 
    enseño Filosofia del derecho en la Universidad Michoacana`
    const practica = `La firma Ramírez Saavedra fue fundada en 1987 y desde entonces se ha 
    destacado en el área del litigio civil. Durante este tiempo, hemos obtenido resultados 
    favorables en disputas civiles para nuestros clientes, incluso en casos considerados 
    perdidos previamente a consultar con Ramírez Saavedra. Contamos con una amplia lista de 
    casos de éxito en el ámbito del litigio de bienes inmuebles, contratos civiles, derecho 
    hipotecario, evicción y asuntos familiares como divorcio, custodia, patria potestad y 
    pensión alimenticia. Nuestra reputación se basa en nuestra capacidad para ofrecer 
    soluciones efectivas y representación legal sólida en una amplia gama de áreas del 
    litigio civil.`
    const quote = `"El derecho no es un fin en sí mismo, sino un medio para alcanzar la justicia" `
    const author = 'Justice Oliver Wendell Holmes'
    return(
        <div className="trayectory-wrapper">
             <div className='foto'>
                <img src={profilePic} alt="" />
                <p className='quote'>{quote}</p>
                <p className='author'>{author}</p>
             </div>
             <div className='main-content-wrapper'>
                <div className='main-content-item'>
                    <h2>Estudios</h2>
                    <p>{estudios}</p>
                </div>
                <div className='main-content-item'>
                    <h2>Academia</h2>
                    <p>{academia}</p>

                </div>
                <div className='main-content-item'>
                    <h2>Practica profesional</h2>
                    <p>{practica}</p>
                </div>
             </div>
                  
        </div>
    )
}

export default Trayectoria