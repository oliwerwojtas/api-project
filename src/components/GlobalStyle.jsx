import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
      
  }
    }
    body{
        font-family: 'Poppins', sans-serif;
        width: 100%;
        overflow-y: scroll;
        background: #151515;
    }
    h2{
        font-size: 2rem;
        font-family: 'Poppins', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.2rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1rem;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: "Poppins", sans-serif;
    }
`;

export default GlobalStyles;
