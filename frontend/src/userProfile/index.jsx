import {StyledCard, StyledTypography, StyledHeader, StyledRow, StyledSemiRow,
StyledButton} from "./styles";
import {logOutAction} from "../logIn/scripts/logOutRequest";
import {useNavigate} from "react-router-dom";


const UsrProfile = (props) => {

    const navigate = useNavigate();


    return(
      <StyledCard>
          <StyledHeader variant="h4">
              Профиль пользователя
          </StyledHeader>
          <StyledRow>
              <StyledSemiRow variant="h5">
                  Username:
              </StyledSemiRow>
              <StyledTypography>
                  {props.usrData.username}
              </StyledTypography>
          </StyledRow>
          <StyledRow>
              <StyledSemiRow variant="h5">
                  Status:
              </StyledSemiRow>
              <StyledTypography>
                 {props.usrData.status}
              </StyledTypography>
          </StyledRow>
          <StyledRow>
              <StyledSemiRow variant="h5">
                  Avatar:
              </StyledSemiRow>
              <StyledTypography>
                  To be done...
              </StyledTypography>
          </StyledRow>
          <StyledButton onClick={e => logOutAction(props.auth, navigate)}>
              Выйти
          </StyledButton>

      </StyledCard>
    );


}

export {UsrProfile}