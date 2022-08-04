import {postRequest} from "../../../httpUtils/httpRequests.js";
import {serverHost} from "../../../httpUtils/envVals";

function timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function submitNewUser(username, password, setDoneState, setUserName, setUserPassword, setAuthCont, setError){
    const body = {username: username, password: password};
    const uri = `${serverHost}/users`;

    const reqState = await postRequest(uri, body).catch(e => console.log(e));

    if(reqState.status === 'success'){
        setDoneState(true);
        setUserName('');
        setUserPassword('');
        setDoneState('Успех!');
        await timeout(2000);
        setAuthCont(true);
    }
    else{

        setDoneState(reqState.status);
    }

}

export {submitNewUser}
