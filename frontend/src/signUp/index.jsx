import {StyledForm, StyledTextInp, StyledButton, StyledButtonContainer} from './styles'
import {useState} from 'react';


const SignUpReq = () =>{
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    return(
        <StyledForm>
            <h1>Sign Up</h1>
            <StyledTextInp>
                <a>User name</a>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
            </StyledTextInp>
            <StyledTextInp>
                <a>Password</a>
                <input type="password" onChange={e => setUserPassword(e.target.value)}/>
            </StyledTextInp>
            <StyledButtonContainer>
                <StyledButton onClick={}>Submit</StyledButton>
            </StyledButtonContainer>

        </StyledForm>
    );
};

export default SignUpReq;