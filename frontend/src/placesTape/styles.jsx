import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";


const PlacesTapeContainer = styled('div')`
  display: flex;
  flex-direction: column;
  //width: 60%;
  width: 59vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;

`;

const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 4vh auto 0 auto;
  
`;

const StyledButton = styled(Button)`
  width: 50%;
  color: #1a237e;
  background-color: #8e99f3;
  font-size: 2vh;
  
  border-radius: 0;
  :hover{
    background-color: #bec9eb;
  }
`;

export {PlacesTapeContainer, ButtonContainer, StyledButton}