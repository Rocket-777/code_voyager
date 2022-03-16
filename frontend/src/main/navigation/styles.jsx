import {Fab} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)`
  z-index: 1;
  position: absolute;
  left: 12%;
  bottom: 10%;
  background-color: #5c6bc0;
  height: 5rem;
  width: 5rem;
  :hover{
    background-color: #8e99f3;
  }
`


export {StyledFab}
