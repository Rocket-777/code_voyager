import {
    StyledCard, StyledTextInp, StyledHeader, StyledRow, StyledSemiRow, StyledButton, StyledBookmark1, StyledBookmark2,
    Container, WrapContainer
} from "./styles"

import {useState} from "react";
import {SignUpCon} from "./signUp";
import {useNavigate} from "react-router-dom";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';

import {useAppDispatch, useAppSelector} from "../../reduxStore/reduxHooks";
import {logInAction} from "../../reduxStore/reducers/Actions";

const LogInCard = (props) => {
    const error = useAppSelector((state) => state.user.error);

    const [authCon, setAuthCont] = useState(true);

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const errorUser = error === 'no such user';
    const errorPassword = error === 'wrong password';
    const navigate = useNavigate();

    const dispatch = useAppDispatch();


    function handleLogIn() {
        dispatch(logInAction({username: userName, password: userPassword}, () => navigate('/profile')))

    }


    return (
        <WrapContainer>
            <StyledCard>
                <StyledHeader>
                    <StyledBookmark1 onClick={e => setAuthCont(true)}
                                     sx={authCon ? {backgroundColor: '#bec9eb'} : null}>
                        <LoginOutlinedIcon sx={{marginRight: '0.3vw'}}/>
                        Войти
                    </StyledBookmark1>
                    <StyledBookmark2 onClick={e => setAuthCont(false)}
                                     sx={authCon ? null : {backgroundColor: '#bec9eb'}}>
                        <AppRegistrationOutlinedIcon sx={{marginRight: '0.3vw'}}/>
                        Зарегистрироваться
                    </StyledBookmark2>
                </StyledHeader>
                {
                    authCon ? <Container>
                        <StyledRow>
                            <StyledSemiRow>Username:</StyledSemiRow>
                            <StyledTextInp error={errorUser} helperText={errorUser ? 'No such user' : null} size="small"
                                           onChange={e => setUserName(e.target.value)} value={userName}/>
                        </StyledRow>
                        <StyledRow>
                            <StyledSemiRow>Password:</StyledSemiRow>
                            <StyledTextInp error={errorPassword} helperText={errorPassword ? 'Wrong password' : null}
                                           size="small" type="password" onChange={e => setUserPassword(e.target.value)}
                                           value={userPassword}/>
                        </StyledRow>
                        <div>{error}</div>
                        <StyledButton onClick={() => handleLogIn()}>
                            <LoginOutlinedIcon sx={{marginRight: '0.4vw'}}/>
                            Войти</StyledButton>
                    </Container> : <SignUpCon contChoice={setAuthCont}/>
                }

            </StyledCard>


        </WrapContainer>

    );
}

export {LogInCard}
