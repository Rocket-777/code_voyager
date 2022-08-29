import {styled} from "@mui/material/styles";
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

const TagBase = styled('div')`
  display: flex;
  height: 1.6rem;
  border-radius: 15px;
  padding: 0.2rem 0.5rem 0.2rem 0.2rem;
  margin: 0.3rem 0.5rem 0.3rem 0.5rem;
  color: #5260AC;
  border: 1px solid #5260AC;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-color: #AFB7F6;
  transition: background-color 300ms ease;
  cursor: pointer;
  :hover{
    background-color: #C6CCF9;
  }
`

const TagIcon = styled(CircleRoundedIcon)`
 height: 0.8rem;
`

export {TagBase, TagIcon}
