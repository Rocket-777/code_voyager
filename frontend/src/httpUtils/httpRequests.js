async function postRequest(uri, body){

    fetch(uri, {
        method: 'POST',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },

        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    }).then(res => console.log(res)).catch(e => console.log(e));
}

async function postRequestWithFile(uri, body){

    fetch(uri, {
        method: 'POST',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        // headers: {
        //
        // },

        referrerPolicy: 'no-referrer',
        body: body
    }).then(res => console.log(res)).catch(e => console.log(e));
}
async function getPlacesRequest(uri){
    return await fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            // 'Authorization' : 'Basic ' + base64.encode(body.username + ':' + body.password),

        },
        referrerPolicy: 'no-referrer',

    }).then(res => res.json()).catch(e => console.log(e)); //EXAMPLE OF RETRIVING TEXT DATA

}
export {postRequest, postRequestWithFile, getPlacesRequest}