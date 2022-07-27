import { styled } from '@mui/material/styles';
import {Button, Paper} from "@mui/material";

const StyledButton = styled(Button)`
  //font-family: "Roboto","Helvetica","Arial",sans-serif;
  text-transform: none;
  height: 100%;
  width: 100%;
  color: white;
  border-radius: 0;
  padding: 0;
  font-size: 1.3rem;
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
  width: 100%;
  color: white;
  border-radius: 0;
  //padding: 0 1rem 0 1rem;
  padding: 0;
  font-size: 18px;
  line-height: 3rem; //height of header
  @media only screen and (max-width: 768px){
    font-size: 0.8rem;
  }
  :hover{
    background-color: #8e99f3;
  }`


const StyledHeader = styled("div") `
  position: relative;
  z-index: 2;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 80%);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  //box-shadow: none;
  background-color: #5c6bc0;
  align-items: center;
  border-radius: 0;
  padding: 0;
  margin: 0;
  -webkit-backface-visibility: hidden; //text flicker fix
  //border-bottom: 1px solid #8e99f3;
`;

// const linkstyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "white",
//     textDecoration: "none",
//     justifyItems: "center",
//     width: "100%",
//     height: "100%"
// }

const linkstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textDecoration: "none",
    justifyItems: "center",
    height: "100%",
    minWidth: "10%"
}

export {StyledHeader, StyledButton, linkstyle, StyledUserButton}
