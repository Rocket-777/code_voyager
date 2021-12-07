import {StyledForm, StyledTextInp, StyledButton, StyledButtonContainer, StyledSignTest} from './styles'
import {deleteCookie} from "../cookieScr/cookieUtils.js";
//import {useEffect} from "react";
//import {getCookie} from "../cookieScr/cookieUtils.js";
import {useState} from "react";


function handleLogOut(authTrigger){
    deleteCookie('user');
    authTrigger(false);
}


const HomePage = (props) => {
    const [usr, setUsr] = useState('')

    return(
        <StyledForm>
            <StyledSignTest>Hello, {usr}</StyledSignTest>
            <StyledButtonContainer>
                <StyledButton onClick={e => handleLogOut(props.auth)}>Log Out</StyledButton>
            </StyledButtonContainer>
        </StyledForm>
        );
}

export {HomePage}