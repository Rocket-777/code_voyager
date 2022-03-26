import {styled} from "@mui/material/styles";
import {Card, TextField, Button} from "@mui/material";

const StyledTextInp = styled(TextField)`
  //margin-left: 10px;
  width: 100%;
  
  background-color: #ededed;
  div{
    ::after{
      border-bottom: 2px solid #5c6bc0;
    }
  }

  
`;

const StyledButton = styled(Button)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #5c6bc0;
  text-transform: none;
  :hover{
    background-color: #8e99f3;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 1vh auto 5vh auto;
  @media only screen and (max-width: 1000px){
    width: 90%
  }
  //margin-bottom: 5vh;
  //margin-left: auto;
  //margin-right: auto;
 // border: 4px solid #1a237e;
  
`;

export {StyledTextInp, StyledCard, StyledButton}
