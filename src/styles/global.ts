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
    font-family: 'Roboto', Arial, sans-serif;
    color: #333;
     
    margin: 0;
    padding: 0;
    border: 0;
  }
  #__next {
    min-width: 1000px;
    width: 100%;
    min-height: 590px;
    height: 100%; 
  }
  
  body, #__next {
    background-image: url('/background.jpg');
    background-size: cover;
    background-attachment: fixed;

    display: flex; 
    flex: 1;
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
