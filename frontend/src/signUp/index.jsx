import {StyledForm, StyledTextInp, StyledButton, StyledButtonContainer} from './styles'
import {useState} from 'react';

async function postRequest(){
    console.log('razraz');
    fetch('http://localhost:3003/users', { //TODO REQUEST BODY, MAKE HTTPUTILS, MAKE SIGNUP SCRIPT
        method: 'POST',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },

        referrerPolicy: 'no-referrer',
        body: ''
    }).then(res => console.log(res)).catch(e => console.log(e));
}
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
                <StyledButton onClick={e => postRequest()}>Submit</StyledButton>
            </StyledButtonContainer>

        </StyledForm>
    );
};

export default SignUpReq;