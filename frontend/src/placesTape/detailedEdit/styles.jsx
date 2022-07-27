import {styled} from "@mui/material/styles";
import {Button, TextField, CircularProgress} from "@mui/material"
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ImageNotSupportedRoundedIcon from '@mui/icons-material/ImageNotSupportedRounded';
const TextInput = styled(TextField)`
  width: 80%;
  margin: 1rem auto 1rem auto;
  
  .MuiOutlinedInput-root {
    
    &:hover fieldset{
      border-color: #5c6bc0;
    }
    &.Mui-focused fieldset{
      border-color: #8e99f3;
    }
  }
  label.Mui-focused{
    color: #8e99f3;
  }
  
`

const AddImgButton = styled(Button)`
  
  border-radius: 10px;
  background-color: lightgray;
  //border: 1px solid gray;
  color: white;
  font-size: 1rem;
  text-transform: none;
  :hover{
    background-color: #bebebe;
  }
`

const RemoveImgButton = styled(Button)`
  position: absolute;
  left: 2%;
  bottom: 2%;
  border-radius: 10px;
  background-color: rgb(211,211,211, 0.9);
  //border: 1px solid gray;
  color: white;
  font-size: 1rem;
  text-transform: none;
  :hover{
    background-color: #bebebe;
  }
`

const UploadImgContainer = styled('label')`
  margin-top: 2rem;
  border-radius: 10px;
`;

const ImgIcon = styled(AddPhotoAlternateIcon)`
  color: white;
  margin-right: 0.3rem;
`

const RemImgIcon = styled(ImageNotSupportedRoundedIcon)`
  color: white;
  margin-right: 0.3rem;
`



const SendButton = styled(Button)`
  position: absolute;
  padding: 0;
  height: 35px;
  bottom: 3%; 
  left: 1%;
  right: 1%;
  width: 80%;
  margin: auto;
  text-transform: none;
  background-color: #5c6bc0;
  color: white;
  font-size: 1.1rem;
  border-radius: 10px;
  :hover{
    background-color: #8e99f3;
  }
  &.Mui-disabled{
    opacity: 0.9;
    background-color: lightgray;
    color: #bebebe;
  }
`

const ButtonLoader = styled(CircularProgress)`
  color: gray;
  opacity: 0.9;
`

const ButtonIcon = styled(CheckCircleOutlineRoundedIcon)`
  margin-right: 0.5rem;
  height: 1.7rem;
  width: 1.7rem;
`

export {TextInput, SendButton, ButtonIcon, AddImgButton, ImgIcon, UploadImgContainer, RemoveImgButton, RemImgIcon, ButtonLoader}
