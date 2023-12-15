import { livros } from './dadosUltimos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import Card from '../Card'
import livro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo tamanhoFonte="36px"
             alinhamento="center"
             >Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt='imagem' ></img>
                ))}
            </NovosLivrosContainer>
            <Card
                titulo ="Talvez você se interesse por esse livro"
                subtitulo="Angular 11"
                descrição="Construindo uma aplicação com a plataforma Google."
                imagem={livro}
            />
        </UltimosLancamentosContainer>
    )
}
        
export default UltimosLancamentos
