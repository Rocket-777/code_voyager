import {Card, Typography, Button, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledButton = styled(Button)`
  background-color: #26418f;
  color: white;
  width: 100%;
  padding-top: 1vh;
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
  padding: 2rem 0 0 0;
  //padding-top: 2rem;
`;

const StyledTextInp = styled(TextField)`
  margin-left: 10px;
  width: 60%;
  background-color: #e8ebff;
  border-radius: 4px;

`;

const StyledSignStatus = styled(Typography)`
  display: flex;
  margin: 0 auto 1.2rem auto;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 3px solid #5ed187;
  background-color: #43b56c;
  width: 25%;
  height: 13%;
  
`;
export {StyledButton, StyledRow, StyledSemiRow, Container, StyledTextInp, StyledSignStatus}