import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #000000;
    color: #EB9B00;
    font-size: ${props => props.tamanhoFonte || "2px"};
    text-align: ${props => props.alinhamento || "center"};
    margin: 0;
`
