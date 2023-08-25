import { styled } from "styled-components";

export const ContTudo = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    background: #1E192C;
`
export const Hearder = styled.div`
    width: 100%;
    height: 8%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px 0px;

    background: black;
`

export const HearderLogo = styled.div`
    width: 90%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0px 40px;

    @media (max-width: 720px) and (min-width:0px){
        display: none;
    }
`
export const HeraderButton = styled.div`
    width: 30%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;

    margin-right: 50px;
    .link{
        text-decoration: none;
        color: white;

        width: 30%;
        height: 35px;

        border-radius: 15px;
        
        background-color: whitesmoke;

        color: black;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    #pri{
        background-color: transparent;
        color: white;
    }
    #pri:hover{
        background-color: whitesmoke;
        color: black;
    }
    @media (max-width: 720px) and (min-width:0px){
        width: 100%;
    }
`

export const ContInfHer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 720px) and (min-width:0px){
        flex-direction: column-reverse;
    }
`
export const ContInfHearder = styled.div`
    width: 50%;
    height: 100%;


    color: whitesmoke;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0 0 0 100px;
    gap: 20px;

    #imp{
        font-size: 50px;
        color: red;
    }
    p{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        width: 50%;
        font-size: 40px;
    }
    #min{
        width: 50%;
        font-size: 16px;
    }
    #but{
        width: 200px;
        height: 40px;
        border: 1px solid red;
        padding: 4px;
        border-radius: 25px;
        margin-top: 50px;
    }
    button{
        width: 200px;
        height: 40px;
        border-radius: 20px;
        background-color: red;
        color: white;
        border: none;
    }
    @media (max-width: 720px) and (min-width:0px){
        width: 100%;

        align-items: center;
        justify-content: center;

        padding: 0;
        margin-top: 30px;

        p{
            width: 90%;
        }
        #imp{
            font-size: 40px;
        }
        #min{
            width: 90%;
        }
    }
`

export const ContImgHearder = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 720px) and (min-width:0px){
        width: 100%;
        height: 20%;
        
        align-items: center;
        justify-content: center;

        margin-top: 50px;

        img{
            width: 80%;
        }
    }
`
//! home

export const LoginRegistro = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const ContInfLogin = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ;

    font-family: open;


    P{
        width: 90%;

        font-size: 40px;

        color: whitesmoke;
    }
`


export const ContINput = styled.div`
    width: 40%;
    height: 100%;


    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    p{
        width: 40%;
        height: 5%;
        background-color: transparent;

        display: flex;
        align-items: center;
        justify-content: center;
    

    }
    input{
        width: 100%;
        height: 100%;
        border: 0;
        background-color: transparent;
        color: white;
        box-shadow: 0 0 0 0;
        outline: 0;
        margin-left: 10px;
    }
    hr{
        width: 275px;
        margin-bottom: 20px;
        color: black;
    }

    img{
        width: 16px;
    }

    h2{
        color: white;
        font-size: 32px;
        padding-bottom: 10px;
    }
    h3{
        color: darkgray;
        font-size: 18px;
        margin-bottom: 30px;
    }
    #pril{
    }
    #att{
        width: 80%;
        height: 10%;
    }
`

export const ButEntar = styled.div`
    #but{
        width: 250px;
        height: 35px;
        border: 1px solid red;
        padding: 4px;
        border-radius: 25px;
        margin-top: 50px;
    }
    button{
        width: 250px;
        height: 35px;
        border-radius: 20px;
        background-color: red;
        color: whitesmoke;
        border: none;
    }
    margin-bottom: 10px;
`

export const EsquiCriar = styled.div`
    width: 100%;
    margin-top: 50px;

    #esqueCriar{
        width: 50%;
        height: 8%;

        display: flex;
        align-items: end;
        justify-content: start;

        color: #23DD7A;

        p{
            text-decoration: none;
            width: 50%;
        }
    }
    #link{
        text-decoration: none;
        color: #23DD7A;
    }
    #es{
        color: #E5E044;
    }
`

export const Att = styled.div`
    width: 100%;
    height: 10%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 20px;

    p{
        width: 80%;
        color: darkgray;
    }
`

export const FazerLogin = styled.div`
    width: 80%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: start;

    color: white;

    #link{
        color: #23DD7A;
        text-decoration: none;
    }
`