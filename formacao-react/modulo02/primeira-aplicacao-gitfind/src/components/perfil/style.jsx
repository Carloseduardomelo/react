import styled from "styled-components";

export const ContPerfil = styled.div`
    width: 100%;
    height: 15%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    margin-top: 30px;
`

export const ContFotoPerfil = styled.div`
    width: 120px;
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: black;
    
    border-radius: 50%;
    img{
        width: 100%;
        border-radius: 50%;
        border: 2px solid white;
    }

`

export const ContPerfilDescricao = styled.div`
    width: 38%;
    height: 100%;

    display: flex;
    align-items: start;
    align-content: center;
    flex-direction: column;
    gap: 10px 10px;

    color: white;

    h3{
        font-size: 17pt;
    }
    p{
        font-size: 11pt;
    }
`