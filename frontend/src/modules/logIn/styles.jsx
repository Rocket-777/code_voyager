import {Card, Typography, Button, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";



const WrapContainer = styled('div')`
  
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 750px;
  
`

const StyledHeader = styled(Typography)`
  display: flex;
  //margin-top: 1.5rem;
  //margin-bottom: 3.5rem;
  text-align: center;
  text-transform: none;
  width: 100%;
  border-bottom: solid 1px #8e99f3;
`;


const StyledCard = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;

  width: 40%;
  height: auto;
  margin: 10% auto auto auto;
  background-color: #bec9eb;
  @media only screen and (max-width: 1000px) {
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
  //border-right: solid 3px #e8ebff;
  text-transform: none;
  @media only screen and (max-width: 1000px) {
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
  text-transform: none;
  line-height: 3rem;
  background-color: #8e99f3;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  //border-left: solid 1.5px #e8ebff;
  @media only screen and (max-width: 1000px) {
    font-size: 0.8rem;
  }
`;
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

export {
    StyledCard, StyledHeader, StyledRow, StyledSemiRow, StyledButton, StyledBookmark1, StyledBookmark2, Container,
    StyledTextInp, WrapContainer
}
