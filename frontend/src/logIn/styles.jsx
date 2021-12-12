import {Card, Typography, Button, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledHeader = styled(Typography)`
  display: flex;    
  //margin-top: 1.5rem;
  //margin-bottom: 3.5rem;
  text-align: center;
  
  
  width: 100%;
  border-bottom: solid #e8ebff;
`;


const StyledCard = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
     
  width: 40%;
  height: 50%;
  margin-top: 12rem;
  margin-right: auto;
  margin-left: auto;
  background-color: #bec9eb;
`;
const StyledBookmark1 = styled(Button)`
  display: flex;
  color: #1a237e;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  height: 100%;
  line-height: 3rem;
  background-color: #8e99f3;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-right: solid 2px #e8ebff;
  
  
`;
const StyledBookmark2 = styled(Button)`
  display: flex;
  color: #1a237e;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  height: 100%;
  line-height: 3rem;
  background-color: #8e99f3;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-left: solid 2px #e8ebff;
  
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

const StyledRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 15%;
  
  align-items: center;
  margin-bottom: 1.5rem;

`;

const StyledSemiRow = styled(Typography)`
  display: flex;
  margin-right: 10px;
  background-color: #bec9eb;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 2rem;
`;

const StyledTextInp = styled(TextField)`
  margin-left: 10px;
  width: 60%;
  background-color: #e8ebff;
  border-radius: 4px;   
  
  
`;

export {StyledCard, StyledHeader, StyledRow, StyledSemiRow, StyledButton, StyledBookmark1, StyledBookmark2, Container,
     StyledTextInp}