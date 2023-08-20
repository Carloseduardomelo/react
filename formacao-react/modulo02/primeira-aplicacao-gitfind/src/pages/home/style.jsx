import styled from "styled-components";

export const ContainerApp = styled.div`
    width: 100%;
    height: 100vh;
`

export const ContApp = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px ;
`

export const ContAppImg = styled.div`
    width: 30%;
    height: auto;


    display: flex;
    align-items: start;
    align-content: flex-end;


    img{
        width: 80%;
    }
`

export const ContAppConteito = styled.div`
    width: 70%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap:20px;

    hr{
        width: 60%;
        background-color: white;
        border: 2px solid white;
        margin-top: 30px;
    }
`
export const StylesInput = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 10px;

    margin-top: 30px;

    
    input{
        box-sizing: border-box;
        width: 45%;
        height: 30px;
        padding: 10px;
        color: white;
        border-radius: 10px;
        border-color: whitesmoke;
        background-color: #1d2128;
        border: none;
    }
    button{
        box-sizing: border-box;
        width: 10%;
        height: 30px;
        color: white;
        border-radius: 10px;
        border-color: whitesmoke;
        background-color: #1d2128;
    }
`

