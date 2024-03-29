import { Button} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledButton = styled(Button)`
  //font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-family: 'Open Sans', sans-serif;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
  //transition: background-color cubic-bezier(.58,.68,.86,.28) 200ms 0ms;
  height: 100%;
  width: 100%;
  color: white;
  border-radius: 0;
  padding: 0;
  font-size: 1.2rem;
  line-height: 3rem;
  @media only screen and (max-width: 768px){
    font-size: 0.8rem;
  }
  :hover{
    background-color: rgb(142, 153, 243, 0.99);
  }
`;

const StyledUserButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
  margin-left: auto;
  font-family: 'Open Sans', sans-serif;
  height: 100%;
  width: 100%;
  color: white;
  border-radius: 0;
  //padding: 0 1rem 0 1rem;
  padding: 0;
  font-size: 18px;
  line-height: 3rem; //height of header
  //transition: background-color cubic-bezier(.58,.68,.86,.28) 200ms 0ms;
  @media only screen and (max-width: 768px){
    font-size: 0.8rem;
  }
  :hover{
    background-color: rgb(142, 153, 243, 0.99);
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
    minWidth: "10%",
}

export {StyledHeader, StyledButton, linkstyle, StyledUserButton}
