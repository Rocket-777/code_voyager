import {authRequest} from "../../httpUtils/wwwAuth.js";


function loginReq(username, password){
    const uri = 'http://localhost:3003/login';
    const body = {username: username, password: password};

    authRequest(uri, body).catch(e => console.log(e));
}

export {loginReq};