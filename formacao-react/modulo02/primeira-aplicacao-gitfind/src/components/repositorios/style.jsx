import styled from "styled-components";

export const ContRepositorios = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: end;
    align-items: center;
    align-content: center;
    flex-direction: column;
`

export const ContInfReposi = styled.div`
    width: 60%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    gap: 20px;

    a{
        color: #006081;
        text-decoration: none;
    }

    @media(max-width: 762px) and (min-width: 1px){
        width: 90%;
    }
    @media(max-width: 502px) and (min-width: 1px){
        width: 100%;
    }
`