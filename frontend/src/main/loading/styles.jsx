import {styled} from "@mui/material/styles";
import LoopIcon from '@mui/icons-material/Loop';

const LoadingContainer = styled('div')`
  display: flex;
  width: 60%;
  margin: auto;
  height: 70vh;

`

const Spin = styled(LoopIcon)`
  margin: auto;
  color: #5c6bc0;
  animation: 1s linear 0s infinite spin;
  
  
  font-size: 10rem;
  @keyframes spin{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(-360deg);
    }
  }

`

export{LoadingContainer, Spin}
