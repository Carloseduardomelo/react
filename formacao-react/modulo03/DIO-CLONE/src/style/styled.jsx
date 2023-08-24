import { styled } from "styled-components";

export const ContTudo = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #1E192C;;
`
export const Hearder = styled.div`
    width: 100%;
    height: 20%;

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

    gap: 30px;

    button{
        width: 30%;
        padding: 10px;

        border-radius: 15px;
        border: transparent;

        color: black;
        background-color: whitesmoke;

        text-decoration: none;
    }
    .link{
        text-decoration: none;
        color: black;
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
    height: 92vh;

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


    color: white;

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
// home