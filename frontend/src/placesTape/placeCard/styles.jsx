import {styled} from "@mui/material/styles";
import {Card, Typography, Button} from "@mui/material";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;

  width: 100%;
  
  
  :hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
  }
  :active{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
  }
`;

const StyledHeader = styled(Typography)`
  
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 1rem;
  overflow-wrap: anywhere;
  border-bottom: 3px solid #1a237e;
  color: #1a237e;
  
`;
const ImageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  width: 70%;
  @media only screen and (max-width: 1000px){
    width: 100%
    
  }
  img{
    height: 50vh;
    width: 50vw;
    object-fit: contain;
    @media only screen and (max-width: 1000px){
      height: 30vh;
      width: 80vw;

    }
  }
  
`;

const StyledDescription = styled(Typography)`
  display: block;
  margin: 1rem auto 0 auto;
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
const NoImage = styled(Typography)`
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  color: #d4d4d4;
  height: 50vh;
  width: 40vw;
  
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bolder;
  border: solid 2px #d4d4d4;
  @media only screen and (max-width: 1000px){
    width: 100%;
    font-size: 5vh;
    
  }
  
`;

const ButtonBlock = styled('div')`
  display: flex;
  flex-direction: row;
  margin: 0 auto 1rem auto;
  width: 100%;
  justify-content: space-evenly;
  
`;
const BlockButton = styled(Button)`
  //margin-left: 2rem;
  width: auto;
  text-transform: none;
  @media only screen and (max-width: 1000px){
    font-size: 0;
    //justify-content: center;
    
  }
  
  
`;
const ButtonBlockContainer = styled('div')`
  display: flex;
  text-transform: none;
  width: 90%;
  padding: 0;
  margin: 0 auto 0 auto;
 
`;
export {StyledCard, StyledHeader, ImageContainer, StyledDescription, NoImage, ButtonBlock, BlockButton, ButtonBlockContainer}
