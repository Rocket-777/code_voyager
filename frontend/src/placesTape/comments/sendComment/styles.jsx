import {styled} from "@mui/material/styles";
import {Card, TextField, Fab} from "@mui/material";

const MarginContainer = styled('div')`
  width: 60%;
  margin: 0 auto 6vh auto;
  @media only screen and (max-width: 1000px){
    width: 90%
  }
`

const StyledCard = styled(Card)`
  
  display: flex;
  flex-direction: row;
  width: 100%;
  
`

const StyledTextInp = styled(TextField)`
  //margin-left: 10px;
  
  width: 100%;
  
  background-color: #e8ebff;
  border-radius: 4px;  
  
  
`;

const SendFab = styled(Fab)`
  text-align: center;
  position: absolute;
  right: 1%;
  bottom: 0.5rem;
  height: 3rem;
  width: 3rem;
  background-color: #5c6bc0;
  
  :hover{
    background-color: #8e99f3;
  }
`

const InputContainer = styled('div')`
  position: relative;
  width: 96%;
  margin: 1rem auto 1rem auto;
  
`
export {StyledCard, StyledTextInp, SendFab, InputContainer, MarginContainer}
