import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        font-size:20px;
        padding: 0;
        margin: 0;
        font-family: 'Nanum Gothic', sans-serif;
    };
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
`;

export default GlobalStyle;