import {styled} from "@mui/material/styles";
import {Card, Typography, Divider} from "@mui/material";


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
  margin: 1rem auto 0.5rem auto;
  @media only screen and (max-width: 1000px){
    width: 90%
  }
 
  
 
`;

const StyledHeader = styled(Typography)`
  padding: 1rem 3rem 0.5rem 3rem;
  
  overflow-wrap: break-word;
  //border-bottom: 3px solid #1a237e;
  //color: #1a237e;
  //background-color: #5c6bc0;
  //color: white;
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

const StyledDivider = styled(Divider)`
  margin: auto 10% auto 10%;
::before{
  top:0; 
  //border-top: 2px solid #1a237e
  border-top: 2px solid #5c6bc0;
} 
  ::after{
    top:0;
    //border-top: 2px solid #1a237e;
    border-top: 2px solid #5c6bc0;
  }
`

const DividerTypography = styled(Typography)`
  font-size: 22px;
  //color: #1a237e;
  color: #5c6bc0;

`

const ActionButtonContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 82%;
  div {
    padding-left: 0;
    margin-left: 0;
    width: 50%;
    @media only screen and (max-width: 1450px){
      width: 55%
    }
    @media only screen and (max-width: 1000px){
      width: 100%
    }
  }
  @media only screen and (max-width: 1000px){
    width: 90%
  }
  
  
`

const MapContainer = styled('div')`
    margin: 1rem auto 1rem auto;
  width: 80%;

`


export {Container, StyledCard, StyledHeader, ShortDescription,
    FullDescription, Info, StyledDivider, DividerTypography, ActionButtonContainer, MapContainer}
