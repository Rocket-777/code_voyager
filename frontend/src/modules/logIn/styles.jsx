import { Card, Typography, Button, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

const WrapContainer = styled('div')`
  overflow-y: auto;

`

const StyledHeader = styled(Typography)`
  display: flex;    
  //margin-top: 1.5rem;
  //margin-bottom: 3.5rem;
  text-align: center;
  
  
  width: 100%;
  border-bottom: solid 3px #e8ebff;
`;


const StyledCard = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
     
  width: 40%;
  height: auto;
  margin-top: 12rem;
  margin-right: auto;
  margin-left: auto;
  background-color: #bec9eb;
     @media only screen and (max-width: 1000px){
          width: 95%
     }
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
  border-right: solid 3px #e8ebff;
     @media only screen and (max-width: 1000px){
          font-size: 0.8rem;
     }
  
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
  //border-left: solid 1.5px #e8ebff;
     @media only screen and (max-width: 1000px){
          font-size: 0.8rem;
     }
`;
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
     StyledTextInp, WrapContainer}
