import {StyledCard, StyledTextInp, StyledHeader, StyledRow, StyledSemiRow, StyledButton, StyledBookmark1, StyledBookmark2, Container} from "./styles"
import {loginReq} from "./scripts/loginRequest";
import {useState} from "react";
import {SignUpCon} from "./signUp";
import {useNavigate} from "react-router-dom";

const LogInCard = (props) => {
    const [authCon, setAuthCont] = useState(true);

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [err, setError] = useState('');

    const errorUser = err === 'no such user';
    const errorPassword = err === 'wrong password';
    const navigate = useNavigate();


    return(
        <StyledCard>
            <StyledHeader>
                <StyledBookmark1 onClick={e => setAuthCont(true)} sx={authCon ? {backgroundColor: '#bec9eb'} : null}>
                        Войти
                </StyledBookmark1>
                <StyledBookmark2 onClick={e => setAuthCont(false)}  sx={authCon ? null : {backgroundColor: '#bec9eb'}}>
                    Зарегистрироваться
                </StyledBookmark2>
            </StyledHeader>
            {
                authCon ? <Container>
                    <StyledRow>
                        <StyledSemiRow>Username:</StyledSemiRow>
                        <StyledTextInp error={errorUser} helperText={errorUser ? 'No such user' : null} size="small" onChange={e => setUserName(e.target.value)} value={userName}/>
                    </StyledRow>
                    <StyledRow>
                        <StyledSemiRow>Password:</StyledSemiRow>
                        <StyledTextInp  error={errorPassword} helperText={errorPassword ? 'Wrong password' : null} size="small" type="password" onChange={e => setUserPassword(e.target.value)} value={userPassword}/>
                    </StyledRow>
                    <StyledButton onClick={e => loginReq(userName, userPassword, props.auth, setError, navigate)}>Войти</StyledButton>
                </Container> : <SignUpCon contChoice={setAuthCont}/>
            }

        </StyledCard>

    );
}

export {LogInCard}