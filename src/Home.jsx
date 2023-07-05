import React from "react"
import './styles/Home.css'
const homeText = `Con
 más de 40 años de trayectoria en litigio civil, en Ramirez Saavedra, nos enorgullece haber enfrentado casos 
extremadamente desfavorables con éxito. Nuestro enfoque estratégico y profundo conocimiento 
del sistema legal mexicano nos ha permitido salir airosos en situaciones complicadas. 
Confía en nuestra capacidad para enfrentar cualquier desafío legal que puedas tener en 
el ámbito del litigio civil. Estamos aquí para brindarle la representación jurídica excepcional 
que necesitas. 
`
function Home(){

    return(
        <div className="home-wrapper">
            <p className="home-text">
                {homeText}
            </p>
        </div>
    )
}

export default Home