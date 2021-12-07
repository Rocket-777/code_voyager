import {StyledForm, StyledTextInp, StyledButton, StyledButtonContainer, StyledSignTest} from './styles'
import {deleteCookie} from "../cookieScr/cookieUtils.js";
import {useEffect} from "react";

import {useState} from "react";
import {usrInit} from './scripts/usrInit'

function handleLogOut(authTrigger){
    deleteCookie('user');
    authTrigger(false);

}
async function setUsers(uri, getUsers){
    const users =  await fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {


        },
        referrerPolicy: 'no-referrer',

    }).then(res => res.json()).then(res => res).catch(e => console.log(e)); //EXAMPLE OF RETRIVING TEXT DATA
    getUsers(users);
}
const HomePage = (props) => {

    useEffect(() => {
       usrInit("http://localhost:3003/home", setUsr);
       setUsers("http://localhost:3003/users", getUsers);
   },[]);
    const [usr, setUsr] = useState('');
    const [users, getUsers] = useState([]);

    return(
        <StyledForm>
            <StyledSignTest>Hello, {usr} !!</StyledSignTest>
            <StyledButtonContainer>
                <StyledButton onClick={e => {handleLogOut(props.auth); e.preventDefault();}}>Log Out</StyledButton>
            </StyledButtonContainer>
        <ul>
            {users.map((item) =>
                <li key={item._id}>{item.username} ||| {item._id} ||| {item.status}</li>
            )}
        </ul>
        </StyledForm>
        );
}

export {HomePage}