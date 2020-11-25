import { createGlobalStyle } from 'styled-components';

import reset from './reset';

export default createGlobalStyle`
  ${reset}
 
  html {
    scroll-behavior: smooth;
  }

  #__next,
  html, 
  body {
    font-family:   Arial, sans-serif;
    color: #333;
    display: flex;
    flex-flow: column;

    margin: 0;
    padding: 0;
    border: 0;

     
  }
  #__next {
    min-height: 100%;
  }
  
  body {
    background-image: url('/background.jpg');
    background-size: cover;
    background-attachment: fixed;
  }
  

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  } 

  .ReactModal__Overlay {
    background-color: rgba(0,0,0,0.5) !important;
  }
  .ReactModal__Content {
    background: none !important;
    border-width: 0px !important;
  }
`;
