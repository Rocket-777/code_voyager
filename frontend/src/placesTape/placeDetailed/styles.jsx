import {styled} from "@mui/material/styles";
import {Card, Typography, Divider, Button} from "@mui/material";
import Switch from "@mui/material/Switch";


const Container = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;

  width: 100%;
  min-height: 100%;
  flex-flow: row wrap;
  overflow-y: auto;
  
`
const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  box-shadow: none;
  width: 60%;
  margin: 1rem auto 0.5rem auto;
  @media only screen and (max-width: 1000px) {
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
  text-indent: 50px;
  display: block;
  margin: 0 auto 0 auto;
  width: 82%;
  //background-color: #ededed;
  //flex-basis: 5rem;
  min-height: 2rem;
  //max-height: 9rem;
  padding: 1rem;
  border-radius: 5px;
  word-wrap: anywhere;
  text-align: justify;
  overflow: auto;

`;

const FullDescription = styled(Typography)`
  display: block;
  text-indent: 50px;
  white-space: pre-wrap;
  margin: 0 auto 1rem auto;
  width: 82%;
  background-color: #f2f2f2;
  //flex-basis: 5rem;
  min-height: 2rem;
  //max-height: 9rem;
  padding: 1rem;
  border-radius: 5px;
  word-wrap: anywhere;
  text-align: justify;
  overflow: auto;

`;

const Info = styled(Typography)`
  display: block;
  margin: 1rem auto 0 auto;
  width: 82%;
  background-color: #f2f2f2;
  //flex-basis: 5rem;
  //min-height: 2rem;
  max-height: 9rem;
  padding: 0.5rem;
  border-radius: 5px;
  word-wrap: anywhere;
  text-align: justify;
  overflow: auto;

`;

const StyledDivider = styled(Divider)`
  padding: 0;
  margin: 1rem 0 auto 0;

  ::before {
    transform: translateY(14px);
    top: 0;
    //border-top: 2px solid #1a237e
    border-top: 1px solid rgba(0, 0, 0, 0.12);

  }

  ::after {
    transform: translateY(14px);
    top: 0;
    //border-top: 2px solid #1a237e;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
`

const DividerTypography = styled(Typography)`
  font-size: 19px;
  user-select: none;
  //font-weight: bold;
  //color: #1a237e;
  color: #a1a1a1;

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
    @media only screen and (max-width: 1450px) {
      width: 55%
    }
    @media only screen and (max-width: 1000px) {
      width: 100%
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 90%
  }


`

const MapContainer = styled('div')`
  position: relative;
  margin: 1rem auto auto auto;
  width: 100%;

`

const ActionWrap = styled('div')`
  position: absolute;
  bottom: 0;
  left: 1rem;
`

const ToggleEdit = styled(Switch)`
  .Mui-checked + .MuiSwitch-track {
    background-color: limegreen !important;
    //opacity: 0.8;
  }

  .Mui-checked {
    .MuiSwitch-thumb {
      color: #8e99f3;
    }

  }

  .MuiSwitch-thumb {
    color: #f2f2f2;
  }

  .MuiSwitch-track {
    background-color: #bebebe;
    transition: background-color 800ms;
  }

`

const AdminContainer = styled(Card)`

  display: flex;
  align-items: center;
  box-shadow: none;
  min-height: 3rem;
  width: 60%;
  margin: 1rem auto auto auto
`
const AdminText = styled(Typography)`
  display: inline;
  margin-left: 1rem;
`

const AdminModeration = styled(Button)`
  text-transform: none;
  margin-left: auto;
  padding: 3.8px 0.7rem 3.8px 0.7rem;
  border-radius: 10px;
  color: #5c6bc0;
  border: 1px solid #5c6bc0;

  :hover {
    background-color: #e6e8f7;
  }
`

const AdminRemove = styled(Button)`
  text-transform: none;
  margin: auto 1rem auto 1rem;
  background-color: #ff6054;
  color: white;
  border-radius: 10px;
  padding: 0.3rem 0.7rem 0.3rem 0.7rem;

  :hover {
    opacity: 0.9;
    background-color: #ff6e63;
  }
`

export {
    Container,
    StyledCard,
    StyledHeader,
    ShortDescription,
    FullDescription,
    Info,
    StyledDivider,
    DividerTypography,
    ActionButtonContainer,
    MapContainer,
    ActionWrap,
    ToggleEdit,
    AdminContainer,
    AdminText,
    AdminRemove,
    AdminModeration
}
