import {Card, Typography, Button} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledHeader = styled(Typography)`
  display: flex;    
  margin-top: 1.5rem;
  margin-bottom: 3.5rem;
  text-align: center;
  justify-content: center;
  padding-bottom: 1rem;
  width: 100%;
  border-bottom: solid #d9deff;
`;

const StyledRow = styled('div')`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 7%;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

`;

const StyledSemiRow = styled(Typography)`
  display: flex;
  margin-right: 1rem;
  background-color: #bec9eb;
`;

const StyledTypography = styled(Typography)`
  display: flex;
  margin-left: auto;
  background-color: #7986cb;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  width: 60%;
  height: 100%;
  border-radius: 10px;
  
  border: 2px solid #6c78b8 ;

`;

const StyledCard = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 50%;
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  background-color: #bec9eb;
`;

const StyledButton = styled(Button)`
  background-color: #26418f;
  color: #d9deff;
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: auto;
  :hover {
    background-color: #1d357a;
  }
`;

export {StyledCard, StyledTypography, StyledHeader, StyledRow, StyledSemiRow, StyledButton}