import {Fab} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledFabUpwards = styled(Fab)`
  z-index: 1;
  position: absolute;
  //border: solid white 1px;
  right: 12%;
  bottom: 12vh;
  background-color: #5c6bc0;
  height: 5rem;
  width: 5rem;
  
  animation: 0.5s ease 0s 1 appear;
  
  @keyframes appear{
    0%{
      transform: translateY(12vh);
    }
    100%{
      transform: translateY(0);
    }
  }
  
  :hover{
    background-color: #8e99f3;
  }
  @media only screen and (max-width: 768px){
    top: 3%;
    right: 3%;
    height: 4rem;
    width: 4rem;
    animation: none;
  }
  
`

const StyledFabBack = styled(Fab)`
  z-index: 1;
  position: absolute;
  //border: solid white 1px;
  left: 12%;
  top: 4%;
  background-color: #5c6bc0;
  height: 5rem;
  width: 5rem;
  animation: 0.5s ease 0s 1 appear;

  @keyframes appear{
    0%{
      transform: translateY(100%);
    }
    100%{
      transform: translateY(0);
    }
  }
  :hover{
    background-color: #8e99f3;
  }
  @media only screen and (max-width: 768px){
    top: 3%;
    left: 3%;
    height: 4rem;
    width: 4rem;
    animation: none;
  }
  
`

export {StyledFabUpwards, StyledFabBack}
