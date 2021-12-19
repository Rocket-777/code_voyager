import {Card, Typography, Button} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledHeader = styled(Typography)`
  display: flex;    
  padding-top: 1.2rem;
  margin-bottom: 3.5rem;
  text-align: center;
  justify-content: center;
  padding-bottom: 1rem;
  width: 100%;
  //border-bottom: solid #d9deff;
  color: white;
  background-color: #1a237e;
`;

const StyledRow = styled('div')`
  display: flex;
  flex-direction: row;
  width: 75%;
  height: 7%;
  justify-content: right;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-right: 2vw;

`;

const StyledSemiRow = styled(Typography)`
  display: flex;
  margin-right: 0.5vw;
  background-color: #bec9eb;
`;

const StyledTypography = styled(Typography)`
  display: flex;
  //margin-left: auto;
  background-color: #e8ebff;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  width: 20vw;
  height: 3vh;
  border-radius: 5px;
  
  border: 2px solid #6c78b8 ;

`;

const StyledCard = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: 70vh;
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  background-color: #bec9eb;
  border: 4px solid #1a237e;
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
  :hover {
    background-color: #1d357a;
  }
`;
const StyledImageOps = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 1vh 0 2vh 0;
`;

const UploadButton = styled(Button)`
  //background-color: #26418f;
  //color: #26418f;
  width: auto;
  
  margin: 0 auto 0 auto;
  height: 100%;
  justify-content: space-evenly;
  //border-color: #26418f;
  //border-radius: 8px;
`;

const UploadButtonContainer = styled('label')`
  display: flex;
  width: 100%;
  margin: 2vh auto 0 auto;
`;
export {StyledCard, StyledTypography, StyledHeader, StyledRow, StyledSemiRow, StyledButton, StyledImageOps,
UploadButtonContainer, UploadButton}