import { styled } from '@mui/material/styles';
import {Button, Paper} from "@mui/material";

const StyledButton = styled(Button)`
  height: 100%;
  width: 20%;
  color: white;
  border-radius: 0;
  padding: 0;
  font-size: 18px;
  vertical-align: middle;
  line-height: 3rem;
  :hover{
    background-color: #8e99f3;
  }
`;

const StyledUserButton = styled(Button)`
  
  margin-left: auto;
  
  height: 100%;
  width: 20%;
  color: white;
  border-radius: 0;
  padding: 0;
  font-size: 18px;
  line-height: 3rem;
  :hover{
    background-color: #8e99f3;
  }`

const StyledHeader = styled(Paper) `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
 
  
  
  background-color: #5c6bc0;
  
  
  align-items: center;

  border-radius: 0;
  padding: 0;
  margin: 0;
  

`;
const linkstyle = {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textDecoration: "none",
    justifyItems: "center",

    width: "100%",
    height: "100%"

}

export {StyledHeader, StyledButton, linkstyle, StyledUserButton}