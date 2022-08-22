import {IUserCredentials} from "../models/IUser";

async function authRequest(uri: string, body: IUserCredentials) {

    return await fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Authorization': 'Basic ' + window.btoa(body.username + ':' + body.password),

        },


        referrerPolicy: 'no-referrer',

    }).then(async res => res.ok ? res : Promise.reject(new Error(await res.text())))
    ;

}

async function logOutRequest(uri: string) {
    return await fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {},

        referrerPolicy: 'no-referrer',

    }).then(res => res).catch(e => console.log(e));
}

export {authRequest, logOutRequest}
