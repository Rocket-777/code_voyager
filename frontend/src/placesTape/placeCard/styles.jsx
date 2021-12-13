import {styled} from "@mui/material/styles";
import {Card, Typography} from "@mui/material";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
`;

const StyledHeader = styled(Typography)`
  padding-left: 3rem;
  margin-top: 1rem;
  border-bottom: 3px solid #1a237e;
  color: #1a237e;
  
`;
const ImageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 85%;
  
`;

const StyledDescription = styled(Typography)`
  display: block;
  margin: 1rem auto 3rem auto;
  width: 82%;
  background-color: #ededed;
  flex-basis: 10rem;
  //max-height: 9rem;
  padding: 1rem;
  border-radius: 5px;
  word-wrap: anywhere;
  text-align: justify;
  overflow: auto;
  
`;
const NoImage = styled(Typography)`
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  color: #d4d4d4;
  flex-basis: 25rem;
  width: 48rem;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bolder;
  border: solid 2px #d4d4d4;
  

`;
export {StyledCard, StyledHeader, ImageContainer, StyledDescription, NoImage}
