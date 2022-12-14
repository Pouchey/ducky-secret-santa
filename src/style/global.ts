import { createGlobalStyle } from 'styled-components';

import theme from './theme'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    
    ::-webkit-scrollbar {
      display: none;
    }
  }
  
  body {
    height: 100%;
    color: ${theme.color.black};
    font-weight: ${theme.weight.regular};
    font-size: ${theme.size.normal};;
    font-family: Inter, sans-serif;
    line-height: 18px;
  }

  #app {
    display: block;
    width: 100%;
    height: 100%;
  }


  a {
    color: inherit;
    text-decoration: none;
  }
  
  #modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 500;
  }

  #menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
  }

`;
