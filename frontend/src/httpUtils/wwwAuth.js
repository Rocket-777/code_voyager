import base64 from 'base-64';

async function authRequest(uri, body){


    fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization' : 'Basic ' + base64.encode(body.username + ':' + body.password)
        },

        referrerPolicy: 'no-referrer',

    }).then(res => console.log(res)).catch(e => console.log(e));
}

export {authRequest}