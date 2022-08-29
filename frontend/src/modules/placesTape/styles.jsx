import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import LoupeRoundedIcon from '@mui/icons-material/LoupeRounded';

const PlacesTapeContainer = styled('div')`
  display: flex;
  flex-direction: column;
  //width: 60%;
  width: 100%;
  min-height: 100%;

  margin-left: auto;
  margin-right: auto;

  flex-flow: row wrap;
  overflow-y: auto;

  //margin-bottom: 5px;

  //padding-bottom: 5px;
`;

const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 5vh;
  margin: 1vh auto 0 auto;

  @media only screen and (max-width: 1000px) {
    width: 90%;
    height: 10vh;
  }

`;

const StyledButton = styled(Button)`
  width: 45%;
  margin: auto;
  //color: #1a237e;
  color: #5260AC;
  background-color: #AFB7F6;
  font-size: 1.1rem;
  text-transform: none;
  border-radius: 10px;

  :hover {
    background-color: #C6CCF9;
  }
`;

const StyledContainer = styled('div')`
  margin: 1rem auto 2rem auto;
  @media only screen and (max-width: 1000px) {
    width: 90%
  }

  text-decoration: none;
  width: 60%;

`

const ProposeBtn = styled(Button)`
  height: 35px;
  width: 100%;
  text-transform: none;
  background-color: #5c6bc0;
  color: white;
  border-radius: 10px;
  font-size: 1.1rem;

  :hover {
    background-color: rgb(142, 153, 243, 0.99);
  }
`

const ProposeIcon = styled(LoupeRoundedIcon)`
  margin-right: 0.5rem;
  height: 1.8rem;
  width: 1.8rem;

`

export {PlacesTapeContainer, ButtonContainer, StyledButton, StyledContainer, ProposeBtn, ProposeIcon}
