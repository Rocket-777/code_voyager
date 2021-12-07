import {postRequest} from "../../httpUtils/httpPost.js";

function timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function submitNewUser(username, password, setDoneState, setUserName, setUserPassword, setError){
    const body = {username: username, password: password};
    const uri = 'http://localhost:3003/users';

    await postRequest(uri, body).catch(e => console.log(e));
    setDoneState(true);
    setUserName('');
    setUserPassword('');
    await timeout(3000);
    setDoneState(false);
}

export {submitNewUser}