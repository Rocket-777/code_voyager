import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const ActionContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 82%;
  margin: 0 auto 0 auto;
  padding: 1rem;
  //background-color: blue;
  cursor: default;
 
  @media only screen and (max-width: 768px){
    flex-direction: column;

  }
`

const ButtonContainer = styled('div')`
  //margin-left: 5%;
  display: flex;
  flex-direction: row;
  //background-color: coral;

  width: 45%;
  justify-content: space-between;
  @media only screen and (max-width: 1000px){
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 8px;
  }


`

const ActionButton = styled(Button)`
  background-color: #5c6bc0;
  box-shadow: 5px 5px 5px -5px rgba(61, 73, 82, 0.6);
  color: white;
  text-transform: none;
  border-radius: 45px;
  height: 2.5rem;
  min-width: 5.5rem;
  transition: all 0.3s ease 0s;
  letter-spacing: 2px;
  
  :hover {
    background-color: #8e99f3;
    transform: translateY(-5px);
  }
  :active{
    transform: none;
    transition: all 0.1s ease 0s;
  }
  @media only screen and (max-width: 1000px){
    :hover {
      background-color: #5c6bc0;
      transform: none;
    }
    :active{
      background-color: #8e99f3;
    }
  }
  
`

const RemoveButton = styled(Button)`
  background-color: crimson;
  box-shadow: 5px 5px 5px -5px rgba(61, 73, 82, 0.6);
  color: white;
  text-transform: none;
  border-radius: 45px;
  height: 2.5rem;
  min-width: 5.5rem;
  transition: all 0.3s ease 0s;
  letter-spacing: 2px;
  :hover {
    background-color: red;
    transform: translateY(-5px);
  }
  
`

const LikeInactive = styled(FavoriteBorderRoundedIcon)`
  font-size: 1.8rem;
  color: white;
  margin: 0 3px 0 3px;
`

const LikeActive = styled(FavoriteRoundedIcon)`
  color: #fa5c5c;
  font-size: 1.8rem;
  margin: 0 3px 0 3px;
`

const CommentSign = styled(CommentRoundedIcon)`
  font-size: 1.8rem;
  color: white;
  margin: 0 3px 0 3px;
`

const FavoriteInactive = styled(StarOutlineRoundedIcon)`
  font-size: 1.8rem;
  color: white;
  margin: 0 3px 0 3px;
`

const FavoriteActive = styled(StarRoundedIcon)`
  font-size: 1.8rem;
  color: #ffcc66;
  margin: 0 3px 0 3px;
`
const RemoveContainer = styled('div')`
  display: flex;
  width: 45%;
  justify-content: flex-end;
  
  @media only screen and (max-width: 1000px){
    justify-content: center;
    margin: 0 auto 0 auto;
    //margin: auto;
  }

`
const RemoveSign = styled(DeleteOutlineOutlinedIcon)`
  font-size: 1.8rem;
  color: white;
  margin: 0 3px 0 3px;
`

export {ActionContainer, ActionButton, ButtonContainer, LikeActive, LikeInactive, CommentSign, FavoriteInactive, FavoriteActive,
    RemoveContainer, RemoveButton, RemoveSign}
