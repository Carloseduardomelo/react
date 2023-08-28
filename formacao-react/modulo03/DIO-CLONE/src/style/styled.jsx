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

        #bot{
            color: white;
            text-decoration: none;
        }
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

        #bot{
            color: white;
            text-decoration: none;
        }
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
export const HomeLogadoStyle = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const InfLogado = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const HearderLogadoStyle = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: black;
`
export const InputLOgado = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;

    padding: 10px;

    input{
        width: 200px;
        height: 30px;
        border: 0;
        background-color: transparent;
        color: white;
        box-shadow: 0 0 0 0;
        outline: 0;

    }

    img{
        width: 62px;
    }

    #input{
        img{
            width: 25px;
        }

        border-radius:  15px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #c4b7b7;
    }

    p{
        color: white;
        font: 1000;
        font-size: 20px;
    }

`

export const FotoLogado = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: end;

    margin-right: 90px;
    padding: 10px;

    img{
        width: 8%;
        border-radius: 50%;
        border: 2px solid white;
    }
`

export const ContPostRanks = styled.div`
    width: 90%;
    height: auto;

    display: flex;
    align-items: start;
    justify-content: center;
    margin-top: 40px;
`

export const Post = styled.div`
    width: 80%;
    height: auto;

    display: flex;
    flex-direction: column;

    gap: 100px;
`
export const Ranks02 =  styled.div`
    width: 30%;
    height: auto;

    display: flex;
    align-items: end;
    justify-content: start;
    flex-direction: column;
`

export const InfTop =  styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;

    gap: 700px;


    margin: 50px 0 0 5px;
`

export const InfPostStyle = styled.div`
    width: 100%;
    height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
` 

export const InfPostImg =  styled.div`
    width: 100%;
    height: 50%;

    img{
        width: 100%;
        height: 100%;

    }
`

export const InfPostInf = styled.div`
    width: 98%;
    height: 50%;

    display: flex;
    align-items: start;
    flex-direction: column;

    gap: 30px;
    padding: 10px;

    color: white;
    background-color: #3a3a3a;

    border-radius: 10px;

    img{
        width: 50px;
        border-radius: 50%;
    }

    #divimg{
        display: flex;
        gap: 20px;
    }
    #nome{
        font-size: 20px;
        color: darkkhaki;
    }
`

export const RanksContsEnd = styled.div`
    width: 100%;
    margin-bottom: 20px;

`

export const RankStyle = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    #contRank{
        display: flex;
        align-items: flex-start;
        justify-content: end;

        img{
            width: 50px;
            border-radius: 30px;
        }

    }

    @keyframes loading {
        from { width: 0 }
        to { width: 100% }
    }

    #div{
        background: #7fec40;
        position: relative;
        height: 8px;
        width: 100%
    }

    #div::after {
        animation: loading 6s infinite ease-in-out;
        background: #897FBA;
        content: '';
        position: absolute;
        left: 0; top: 0; bottom: 0
    }

    #nome{
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        margin-left: 30px;

        p{
            font-size: 20px;
            color: white;
        }
    }
`