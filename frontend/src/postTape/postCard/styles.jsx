import {styled, Typography, Card} from "@mui/material";



const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 4vh;

`;
const UserInfo = styled('div')`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  margin: 1.5vh auto 0 1.5vw;
  
  
`;
const UserName = styled(Typography)`
  margin-left: 0.7vw;
  font-weight: bolder;
  font-size: 2.5vh;

`;

const StyledText = styled(Typography)`
  display: flex;
  margin: 1.5vh 1vw 1.5vh 1vw;
  height: fit-content;
  background-color: #ededed;
  flex-basis: 75%;
  
  padding: 1.7%;
  border-radius: 5px;
  word-wrap: anywhere;
  text-align: justify;
  //overflow: auto;
`;

const ButtonBlock = styled('div')`
  display: flex;
  flex-direction: row;
  width: 20vw;
  justify-content: space-evenly;
  align-self: end;
  margin-bottom: 1vh;
`;
const PostBody = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  

`;
export {StyledCard, StyledText, UserInfo, UserName, ButtonBlock, PostBody}