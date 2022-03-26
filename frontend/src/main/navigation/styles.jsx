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
  
  animation: 0.5s linear 0s 1 appearUp;
  
  @keyframes appearUp{
    0%{
      transform: translateY(4vh);
      
    }
    65%{
      transform: translateY(-2vh);
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
      transform: translateY(10vh);
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
