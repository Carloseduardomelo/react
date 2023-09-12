import { createGlobalStyle  } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
    }
    html{
        width: 99.9vw;
        height: 100vh;
    }
    body{
        background-color: #1d2128;
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    hr{
        background-color: #E5E5E5;
        opacity: 0.3;
        border: 1px solid #E5E5E5;
    }
`