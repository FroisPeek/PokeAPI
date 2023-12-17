import styled from "styled-components"
import Pokemon from "./DadosPesquisa"
import '../styles.css'


const PesquisaConteiner = styled.section`
        background-image: linear-gradient(180deg, #ff0000 50%, #000000 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 30%;
        width: 100%;
        margin-top: -70px;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 64px;
        text-align: center;
        width: 100%;
        margin-top: -40px;
        margin-bottom: 10px;
`

const SubTitulo = styled.h3`
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 50px;
`


function Pesquisa() {
    const handleButtonClick = () => {
        Pokemon()
    };

    return (
        <PesquisaConteiner>
            <Titulo>Conhece os pokemons?</Titulo>
            <SubTitulo>Vou te apresentar alguns deles, mas não se assuste com tanto poder.</SubTitulo>
            <button onClick={handleButtonClick} class="glow-on-hover" type="button">Buscar Dados da PokeAPI</button>
            <p><strong>Eles vão aparecer aqui 👇 </strong></p>
            <div className="pokemon-boxes"></div>
        </PesquisaConteiner>
    )
}

export default Pesquisa
