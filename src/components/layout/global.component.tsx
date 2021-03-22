import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        overflow:auto;
        font-size:20px;
        padding: 0;
        margin: 0;
        font-family: 'Nanum Gothic', sans-serif;
    };
    #root{
        height:100vh;
    }
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor:pointer;
    }
    main{
        padding-top:100px;
        height:calc(100% - 100px);
        display:flex;
        justify-content:center;
        align-items:center;
    }
    article{
        height:100%;
    }
`;

export default GlobalStyle;