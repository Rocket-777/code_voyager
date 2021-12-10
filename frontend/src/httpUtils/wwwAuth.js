import base64 from 'base-64';

async function authRequest(uri, body){

    return await fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Authorization' : 'Basic ' + base64.encode(body.username + ':' + body.password),

        },


        referrerPolicy: 'no-referrer',

    }).then(res => res).catch(e => console.log(e));

}

async function logOutRequest(uri){
    return await fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {

        },

        referrerPolicy: 'no-referrer',

    }).then(res => res).catch(e => console.log(e));
}

export {authRequest, logOutRequest}