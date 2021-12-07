import {StyledForm, StyledTextInp, StyledButton, StyledButtonContainer, StyledSignTest} from './styles'
import {deleteCookie} from "../cookieScr/cookieUtils.js";
import {useEffect} from "react";
//import {getCookie} from "../cookieScr/cookieUtils.js";
import {useState} from "react";
import {usrInit} from './scripts/usrInit'

function handleLogOut(authTrigger){
    deleteCookie('user');
    authTrigger(false);

}

const HomePage = (props) => {

    useEffect(() => {
       usrInit("http://localhost:3003/home", setUsr);
   },[]);
    const [usr, setUsr] = useState('');

    return(
        <StyledForm>
            <StyledSignTest>Hello, {usr} !!</StyledSignTest>
            <StyledButtonContainer>
                <StyledButton onClick={e => {handleLogOut(props.auth); e.preventDefault();}}>Log Out</StyledButton>
            </StyledButtonContainer>
        </StyledForm>
        );
}

export {HomePage}