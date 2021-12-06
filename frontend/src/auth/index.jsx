import {StyledForm, StyledTextInp, StyledButton, StyledButtonContainer, StyledSignTest} from '../signUp/styles'
import {useState} from "react";
import {loginReq} from "./scripts/loginRequest";

const SignIn = () =>{
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');


    return(
        <StyledForm>
            <h1>Sign In</h1>
            <StyledTextInp>
                <a>User name</a>
                <input type="text" onChange={e => setUserName(e.target.value)} value={userName}/>
            </StyledTextInp>
            <StyledTextInp>
                <a>Password</a>
                <input type="password" onChange={e => setUserPassword(e.target.value)} value = {userPassword}/>
            </StyledTextInp>
            <StyledButtonContainer>
                <StyledButton onClick={e => loginReq(userName, userPassword)}>Sign In</StyledButton>
            </StyledButtonContainer>

        </StyledForm>
    );
};

export default SignIn;