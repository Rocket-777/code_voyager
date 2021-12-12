import {styled} from "@mui/material/styles";
import {Card, Typography} from "@mui/material";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 40rem;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
`;

const StyledHeader = styled(Typography)`

  
`;
export {StyledCard, StyledHeader}
