import {Fab} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)`
  z-index: 1;
  position: absolute;
  //border: solid white 1px;
  right: 12%;
  bottom: 12%;
  background-color: #5c6bc0;
  height: 5rem;
  width: 5rem;
  :hover{
    background-color: #8e99f3;
  }
  @media only screen and (max-width: 768px){
    top: 3%;
    right: 3%;
    height: 4rem;
    width: 4rem;
  }
  
`


export {StyledFab}
