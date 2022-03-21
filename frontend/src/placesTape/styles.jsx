import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const PlacesTapeContainer = styled('div')`
  display: flex;
  flex-direction: column;
  //width: 60%;
  width: 100%;
  min-height: 100%;
  
  margin-left: auto;
  margin-right: auto;
  
  flex-flow: row wrap;
  overflow-y: auto;
  scroll-behavior: smooth;
  //margin-bottom: 5px;
  
  //padding-bottom: 5px;
`;

const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin: 4vh auto 0 auto;
  @media only screen and (max-width: 1000px){
    width: 90%
  }
  
`;

const StyledButton = styled(Button)`
  width: 50%;
  color: #1a237e;
  background-color: #8e99f3;
  font-size: 2vh;
  text-transform: none;
  border-radius: 0;
  :hover{
    background-color: #bec9eb;
  }
`;

const StyledLink = styled(Link)`

  @media only screen and (max-width: 1000px){
    width: 90%
  }
  
  text-decoration: none;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  
`
export {PlacesTapeContainer, ButtonContainer, StyledButton, StyledLink}
