//import styled from "styled-components";
import { styled } from '@mui/material/styles';

const MainLayout = styled('div')`
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  //padding: 0;
  height: 100%;
  //background-color: #e8ebff;
  padding-bottom: 5rem;
  font-family: 'Open Sans', sans-serif;
`;
const ScrollContainer = styled('div')`
  
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 1px 0 0 0;
  padding: 0;
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 0;
 

  
  *::-webkit-scrollbar-track {
    background-color: inherit;
    border-radius: 50px;
    
  }
  *::-webkit-scrollbar-thumb {
    
    background-color: grey;
    border-radius: 50px;
  }
  *::-webkit-scrollbar {
   
    width: 5px
  }
`

export {MainLayout, ScrollContainer}
