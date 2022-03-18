import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

const Comment = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  margin: 1vh auto 0 auto;

`
const CommentText = styled(Typography)`
  display: block;
  margin: 1rem auto 2rem auto;
  width: 82%;

  background-color: #ededed;
  //flex-basis: 5rem;
  min-height: 2rem;
  max-height: 9rem;
  padding: 1rem;
  border-radius: 5px;
  word-wrap: anywhere;
  text-align: justify;
  overflow: auto;
  
`;
const UserInfo = styled('div')`
  display: flex;
  flex-direction: row;
  width: 82%;
  align-items: center;
  margin: 1vh auto 0 auto;
  
  
  
`;
const UserName = styled(Typography)`
  margin-left: 0.7vw;
  font-weight: bolder;
  font-size: 2.5vh;

`;

export {Comment, CommentText, UserInfo, UserName}
