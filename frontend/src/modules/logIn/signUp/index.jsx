import {StyledButton, StyledRow, StyledSemiRow, Container, StyledTextInp, StyledSignStatus} from "./styles";
import {useState} from "react";
import {submitNewUser} from "./scripts/newUserRequest";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";

const SignUpCon = (props) => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [doneStatus, setDoneStatus] = useState('');
    const [err, setError] = useState(false);

    return(
        <Container>
            <StyledRow>
                <StyledSemiRow>Username:</StyledSemiRow>
                <StyledTextInp size="small" onChange={e => setUserName(e.target.value)} value={userName}/>
            </StyledRow>
            <StyledRow>
                <StyledSemiRow>Password:</StyledSemiRow>
                <StyledTextInp size="small" type="password" onChange={e => setUserPassword(e.target.value)} value={userPassword}/>
            </StyledRow>
            {doneStatus ? <StyledSignStatus>{doneStatus}</StyledSignStatus> : null}
            <StyledButton onClick={e => submitNewUser(userName, userPassword, setDoneStatus, setUserName, setUserPassword, props.contChoice, setError)}>
                <AppRegistrationOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                Зарегистрироваться
            </StyledButton>
        </Container>
    );
}
export {SignUpCon}
