import {styled} from "@mui/material/styles";
import {Button, Card, TextField, Typography} from "@mui/material";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  //border: 4px solid #1a237e;
  margin-top: 1rem;
  @media only screen and (max-width: 768px){
    width: 90%
  }
  
`;


const StyledRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 15%;
  margin-top: 2rem;
  align-items: center;
  margin-bottom: 1.5rem;

`;

const StyledSemiRow = styled(Typography)`
  display: flex;
  //margin-right: 10px;
  
  
  //background-color: #bec9eb;
`;


const StyledTextInp = styled(TextField)`
  //margin-left: 10px;
  width: 60%;
  background-color: #e8ebff;
  border-radius: 4px;   
  
`;
const StyledTextInpDescription = styled(TextField)`
  margin: 1rem auto 1rem auto;
  
  width: 80%;
  background-color: #e8ebff;
  border-radius: 4px;   
  
  
`;
const StyledHeader =  styled(Typography)`
  padding-top: 1.5rem;
  padding-left: 2rem;
  color: white;
  background-color: #1a237e;
  border-bottom: 4px solid #1a237e;
  
`;
const StyledColumn = styled("div")`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  width: 100%;
`;
const StyledButton = styled(Button)`
  background-color: #26418f;
  color: #d9deff;
  width: 100%;
  padding-top: 1vh;
  //border-top-left-radius: 0;
  //border-top-right-radius: 0;
  border-radius: 0;
  margin-top: auto;
  text-transform: none;
  :hover {
    background-color: #1d357a;
  }
`;
const UploadButton = styled(Button)`
  //background-color: #26418f;
  //color: #26418f;
  width: 100%;
  height: 100%;
  text-transform: none;
  //border-color: #26418f;
  //border-radius: 8px;
`;

const UploadButtonContainer = styled('label')`
  margin: 0 auto 1rem auto;
`;

const ImageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
  
`;
const RemoveImageButton = styled(Button)`
  margin: 1rem auto 1rem auto;
  text-transform: none;
`;
export {StyledCard, StyledRow, StyledSemiRow, StyledTextInp, StyledHeader, StyledButton, StyledTextInpDescription,
StyledColumn, UploadButton, UploadButtonContainer, ImageContainer, RemoveImageButton}
