import styled from "styled-components";

export const ContApp = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;

    color: red;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    gap: 30px 0;
`


export const ContHearder = styled.div`
    width: 100%;
    height: 15%;
    
    color: white;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 20pt;
    
    img{
        width: 80px;
    }
`
export const ContInput = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 20px;

    input{
        width: 50%;
        height: 35px;

        color: white;
        background-color: darkgray;

        border-color: none;
        border: none;
        border-radius: 20px;

        padding:  0 10px;
    }

    input:focus{
        border: none;
    }

    input::placeholder{
        color: black;
    }

    input:hover{
        background-color: white;
        border-color: black;
        color: black;
    }

    button{
        width: 50%;
        height: 35px;

        color: white;
        background-color: transparent;

        border-radius: 20px;
    }

    button:hover{
        background-color: darkgray;
        color: black
    }
`

export const ContRepos = styled.div`
    width: 60%;
    height: auto;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px 0;

    color: white;

    hr{
        width: 100%;
    }
`

export const ContBUtton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    gap: 0 20px;

    button{
        width: 90px;
        height: 35px;
        border-radius: 10px;
    }

    a{
        color: black;
        text-decoration: none;
    }
`