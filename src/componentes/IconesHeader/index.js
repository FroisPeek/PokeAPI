import React from "react";
import sacola from '../../imagens/sacola.svg'
import perfil from '../../imagens/perfil.svg'
import './estilos.css'

const icones = [sacola, perfil]

function IconesHeader(){
    return(
        <ul className='icones'>
            {icones.map((icone) => (
              <li className='icone'><img src={icone} alt="imagem"></img></li>
            ))}
        </ul>
    )
}

export default IconesHeader
