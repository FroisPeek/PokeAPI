import React from 'react';
import './estilos.css'

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
  return (
    <ul className='opcoes'>
      {textoOpcoes.map((texto, index) => (
        <li key={index} className={`opcao opcao-${index + 1}`}>
          {texto}
        </li>
      ))}
    </ul>
  );
}

export default OpcoesHeader;
