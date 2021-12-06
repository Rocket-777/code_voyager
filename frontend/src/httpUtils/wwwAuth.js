import base64 from 'base-64';

async function authRequest(uri, body){


    fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Authorization' : 'Basic ' + base64.encode(body.username + ':' + body.password),
           // 'Origin': 'http://localhost:3000'
           // 'Access-Control-Allow-Origin': 'http://localhost:3003'
        },


        referrerPolicy: 'no-referrer',

    }).then(res => console.log(res)).catch(e => console.log(e));
}

export {authRequest}