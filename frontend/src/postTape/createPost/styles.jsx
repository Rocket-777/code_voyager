import {styled} from "@mui/material/styles";
import {Card, TextField, Button} from "@mui/material";

const StyledTextInp = styled(TextField)`
  //margin-left: 10px;
  width: 100%;
  
  background-color: #ededed;
  
  
`;

const StyledButton = styled(Button)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 1vh auto 5vh auto;
  @media only screen and (max-width: 768px){
    width: 90%
  }
  //margin-bottom: 5vh;
  //margin-left: auto;
  //margin-right: auto;
 // border: 4px solid #1a237e;
  
`;

export {StyledTextInp, StyledCard, StyledButton}
