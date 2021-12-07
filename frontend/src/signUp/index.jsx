import {StyledForm, StyledTextInp, StyledButton, StyledButtonContainer, StyledSignTest} from './styles'
import {useState} from 'react';
import {submitNewUser} from "./scripts/newUserRequest.jsx";

const SignUpReq = () =>{
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [doneStatus, setDoneStatus] = useState(false);
    const [error, setError] = useState(false);

    return(
        <StyledForm>
            <h1>Sign Up</h1>
            <StyledTextInp>
                <a>User name</a>
                <input type="text" onChange={e => setUserName(e.target.value)} value={userName}/>
            </StyledTextInp>
            <StyledTextInp>
                <a>Password</a>
                <input type="password" onChange={e => setUserPassword(e.target.value)} value = {userPassword}/>
            </StyledTextInp>
            <StyledButtonContainer>
                <StyledButton onClick={e => submitNewUser(userName, userPassword, setDoneStatus, setUserName, setUserPassword, setError)}>Submit</StyledButton>
            </StyledButtonContainer>
            {doneStatus ? <StyledSignTest>Done!</StyledSignTest> : null}
        </StyledForm>
    );
};

export default SignUpReq;