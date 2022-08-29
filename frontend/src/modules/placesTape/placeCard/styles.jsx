import { Button, Card, Skeleton, Typography} from "@mui/material";
import Logo from '../../../assets/newLogo.svg'
import {Link} from "react-router-dom";
import {styled} from "@mui/material/styles";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
`


const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;

  width: 100%;
  box-shadow: none;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  }

  :active {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  }
`;

const StyledHeader = styled(Typography)`
  padding: 1rem 3rem 0.5rem 3rem;
  //margin: auto;
  //padding-left: 3rem;
  //padding-right: 3rem;
  //margin-top: 1rem;
  overflow-wrap: normal;
  
  //border-bottom: 3px solid #1a237e;
  //color: #1a237e;
  //background-color: #5c6bc0;
  //color: white;
  //background-color: #f5f5f5;
  //border-bottom: 2px solid #5c6bc0;
  //color: #5c6bc0;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    font-size: 1.5rem;

  }
`;
const ImageContainer = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  //margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 1000px) {
    width: 100%

  }

  img {
    height: 50vh;
    width: 100%;
    object-fit: cover;
    @media only screen and (max-width: 1000px) {
      height: 30vh;


    }
  }

`;

const StyledDescription = styled(Typography)`
  display: block;
  margin: 1rem auto 0 auto;
  width: 82%;
  background-color: #f2f2f2;
  //flex-basis: 5rem;
  min-height: 2rem;
  max-height: 9rem;
  padding: 1rem;
  border-radius: 5px;
  word-wrap: anywhere;
  text-align: justify;
  overflow: auto;

`;
const NoImage = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  //color: #d4d4d4;
  height: 50vh;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  //border-radius: 8px;
  //font-weight: bolder;
  //border: solid 2px #d4d4d4;
  //overflow-wrap: anywhere;
  @media only screen and (max-width: 1000px) {
    //width: 60%;
    height: 30vh;
    //font-size: 3vh;
    //overflow-wrap: anywhere;

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
  @media only screen and (max-width: 1000px) {
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

const SkeletonContainer = styled('div')`
  margin: 1rem auto 2rem auto;
  @media only screen and (max-width: 1000px) {
    width: 90%
  }

  text-decoration: none;
  width: 60%;

`

const SkeletonHeader = styled(Skeleton)`
  margin: 1rem 3rem 0.5rem 3rem;
  height: 2rem;
  width: 40%;
  transform: none;

`

const SkeletonDesc = styled(Skeleton)`
  width: 82%;
  padding: 0 1rem 0 1rem;
  height: 1rem;
  margin: 1rem auto 0 auto;
  transform: none;



`

const SkeletonImgCont = styled(Skeleton)`
  //position: relative;
  display: flex;
  height: 50vh;
  width: 100%;
  max-width: 100%;
  @media only screen and (max-width: 1000px) {
    height: 30vh;
  }
`
const SkeletonLogo = styled(Logo)`

  height: 50%;
  visibility: visible;
  margin: auto;


`
export {
    StyledCard,
    StyledHeader,
    ImageContainer,
    StyledDescription,
    NoImage,
    ButtonBlock,
    BlockButton,
    ButtonBlockContainer,
    SkeletonContainer,
    SkeletonHeader,
    SkeletonDesc,
    SkeletonImgCont,
    SkeletonLogo,
    StyledLink
}
