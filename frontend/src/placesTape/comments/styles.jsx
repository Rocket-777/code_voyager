import {styled} from "@mui/material/styles";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';

const CommentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  //border-top: 3px solid #1a237e;
 // padding-top: 2vh;
  width: 100%;
  animation: 0.5s ease-in-out 0s 1 appear;
  @keyframes appear{
    0%{
      transform: translateY(100%);
    }
    100%{
      transform: translateY(0);
    }
  }

`

const CommentSign = styled(CommentRoundedIcon)`
  height: 2rem;
  width: 2rem;
  color: #bebebe;
`

export {CommentContainer, CommentSign}
