import {Typography, Button, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledButton = styled(Button)`
  background-color: #26418f;
  color: white;
  width: 100%;
  text-transform: none;
  padding-top: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: auto;
  height: 35px;
  :hover {
    background-color: #1d357a;
  }
`;
const StyledRow = styled('div')`
  display: flex;
  margin: 20px auto auto auto;
  flex-direction: row;
  width: 100%;
  height: 15%;
  align-items: center;

`;

const StyledSemiRow = styled(Typography)`
  display: flex;
  width: 75px;
  margin-right: 5%;
  margin-left: auto;
  background-color: #bec9eb;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  //padding-top: 2rem;
  flex-flow: row wrap;
  overflow-y: auto;
`;

const StyledTextInp = styled(TextField)`
  margin-right: auto;
  //margin-left: 10px;
  width: 50%;
  background-color: #e8ebff;
  border-radius: 4px;

`;

const StyledSignStatus = styled(Typography)`
  display: flex;
  margin: 1rem auto 1.2rem auto;
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
