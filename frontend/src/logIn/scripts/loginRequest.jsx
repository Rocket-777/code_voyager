import {authRequest} from "../../httpUtils/wwwAuth.js";
import {getCookie} from "../../cookieScr/cookieUtils.js";


function timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loginReq(username, password,authTrigger,setError, navigate){
    const uri = 'http://localhost:3003/login';
    const body = {username: username, password: password};

    const message = await authRequest(uri, body).then(response =>{
        console.log(response)
        if(response.ok){

            if(getCookie('user') || getCookie('admin') || getCookie('moderator')){

                authTrigger(true);
            }
        }
        else {
            return response.text();
        }
    });
    if(message){
        setError(message);
        await timeout(5000);
        setError('');
    }
    console.log(message);
    navigate("/profile");
}

export {loginReq};