//import styled from "styled-components";
import { styled } from '@mui/material/styles';

const MainLayout = styled('div')`
  display: flex;
  flex-direction: column;
  
  
  background-color: #e8ebff;
  
  
  //padding-bottom: 5rem;
  
  

`;
const ScrollContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 0;
  
  padding: 0;
  position: absolute;
  top: 5%;
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
