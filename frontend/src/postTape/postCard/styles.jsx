import {styled, Typography, Card, Skeleton} from "@mui/material";



const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 60%;
  margin-bottom: 4vh;
  margin-top: 1rem;
  
  
  @media only screen and (max-width: 1000px){
    width: 90%
  }

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
  //margin: 0 auto 1vh auto;
  width: 100%;
  

  @media only screen and (max-width: 768px){
    width: 100%;
    justify-content: center;
  }
  
  
`;
const PostBody = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  
`;

const SkeletonContent = styled(Skeleton)`
  transform: none;
  height: 1rem;
  margin: 1.5vh 1vw 0 1vw;
`

const SkeletonAvatar = styled(Skeleton)`
  width: 65px;
  height: 65px;
  
`

const SkeletonUser = styled(Skeleton)`
  transform: none;
  height: 1.3rem;
  width: 14vw;
  margin-left: 0.7vw;
  @media only screen and (max-width: 768px){
    width: 10rem;

  }

`

export {StyledCard, StyledText, UserInfo, UserName, ButtonBlock, PostBody, SkeletonUser, SkeletonContent, SkeletonAvatar}
