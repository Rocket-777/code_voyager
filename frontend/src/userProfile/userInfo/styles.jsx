import { styled } from '@mui/material/styles';
import {Card, Avatar, Button} from "@mui/material";
import {Typography} from "@mui/material";
import {CommentSign} from "../../actionButtons/styles";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileCard = styled(Card)`
  display: flex;
  flex-direction: row;
  margin: 1rem auto auto auto;
  width: 60%;
  box-shadow: none;
  justify-content: space-evenly;
  align-items: center;
  height: 8rem;
  border-left: 10px solid #5c6bc0;
  border-right: 10px solid #5c6bc0;
`
const UserImage = styled(Avatar)`
  height: 7rem;
  width: 7rem;
  margin: 1rem;
`
const Col = styled('div')`
  display: flex;
  flex-direction: column;

`
const Row = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Text = styled(Typography)`
  display: flex;
  margin-bottom: 0.1rem;
  font-weight: 400;
  align-items: center;
`
const Text2 = styled(Typography)`
  font-weight: 600;
  font-size: 1.5rem;
`
const Comments = styled(CommentSign)`
  color: #5c6bc0;
`
const Divider = styled('div')`
  height: 100%;
  border-left: 1px solid #d3d3d3;
`
const UploadButtonContainer = styled('label')`
  display: flex;
  width: 60%;
  border-radius: 10px;

`;

const UploadButton = styled(Button)`
  background-color: lightgrey;
  color: white;
  width: 100%;
  text-transform: none;
  margin: 0 auto 0 auto;
  height: 100%;
  border-radius: 10px;
  //border-color: #26418f;
  :hover{
    background-color: #bebebe;
  }
`;

const ImageIcon = styled(PhotoCameraIcon)`
    color: white;
`
const OutIcon = styled(LogoutIcon)`
  margin-right: 0.3rem;
`

const LogoutButton = styled(Button)`
  background-color: white;
  font-size: 1rem;
  color: #5c6bc0;
  border: 1px solid #5c6bc0;
  text-transform: none;
  border-radius: 10px;
  width: 60%;
  height: 2.3rem;
  margin: 1rem auto auto auto;
  :hover{
    background-color: #e6e8f7;
  }
`

export {ProfileCard, UserImage, Col, Row, Text, Text2, Comments, Divider, UploadButtonContainer, UploadButton,
    ImageIcon, LogoutButton, OutIcon}
