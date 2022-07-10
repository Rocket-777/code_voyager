import { styled } from '@mui/material/styles';
import {Button, Paper} from "@mui/material";

const StyledButton = styled(Button)`
  text-transform: none;
  height: 100%;
  width: 10%;
  color: white;
  border-radius: 0;
  padding: 0;
  font-size: 18px;
  vertical-align: middle;
  line-height: 3rem;
  
  @media only screen and (max-width: 768px){
    font-size: 0.8rem;
  }
  :hover{
    background-color: #8e99f3;
  }
`;

const StyledUserButton = styled(Button)`
  text-transform: none;
  margin-left: auto;
  
  height: 100%;
  min-width: 15%;
  
  color: white;
  border-radius: 0;
  padding: 0 1rem 0 1rem;
  font-size: 18px;
  line-height: 3rem; //height of header
  @media only screen and (max-width: 768px){
    font-size: 0.8rem;
  }
  :hover{
    background-color: #8e99f3;
  }`


const StyledHeader = styled(Paper) `
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 10;
  //box-shadow: 10px 5px 5px red;;
  background-color: #5c6bc0;
  align-items: center;
  border-radius: 0;
  padding: 0;
  margin: 0;
  

`;
const linkstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textDecoration: "none",
    justifyItems: "center",

    width: "100%",
    height: "100%"

}

export {StyledHeader, StyledButton, linkstyle, StyledUserButton}
