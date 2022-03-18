import {styled} from "@mui/material/styles";
import {Card, Typography} from "@mui/material";


const Container = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  width: 100%;
  min-height: 100%;
  flex-flow: row wrap;
  overflow-y: scroll;
  
`
const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  
  width: 60%;
  margin: 1rem auto 2rem auto;
  @media only screen and (max-width: 768px){
    width: 90%
  }
 
  
 
`;

const StyledHeader = styled(Typography)`
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 1rem;
  overflow-wrap: break-word;
  border-bottom: 3px solid #1a237e;
  color: #1a237e;
  
`;

const ShortDescription = styled(Typography)`
  display: block;
  margin: 1rem auto 1rem auto;
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

const FullDescription = styled(Typography)`
  display: block;
  margin: 1rem auto 1rem auto;
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

const Info = styled(Typography)`
  display: block;
  margin: 1rem auto 1rem auto;
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

const CommentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  border-top: 3px solid #1a237e;
`

export {Container, StyledCard, StyledHeader, ShortDescription, FullDescription, Info, CommentContainer}
