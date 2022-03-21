async function postRequest(uri, body){

    return await fetch(uri, {   // DO NOT FORGET THE AWAIT !!!!!!!!!
        method: 'POST',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },

        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    }).then(res => res.json()).catch(e => console.log(e));
}

async function postRequestWithFile(uri, body){

    await fetch(uri, {
        method: 'POST',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        // headers: {
        //
        // },

        referrerPolicy: 'no-referrer',
        body: body
    }).then(res => res).catch(e => console.log(e));
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


async function getPosts(uri){
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

async function deleteReq(uri, id){
    return await fetch(uri, {
        method: 'DELETE',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {

            'Content-Type': 'application/json;charset=utf-8'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({key: id})
    }).then(res => res).catch(e => console.log(e));
}
async function deleteReqUri(uri){
    return await fetch(uri, {
        method: 'DELETE',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {

            'Content-Type': 'application/json;charset=utf-8'
        },
        referrerPolicy: 'no-referrer',
    }).then(res => res).catch(e => console.log(e));
}

async function putReq(uri, body){
    if(body !== null){
        return await fetch(uri, {
            method: 'PUT',
            mode: "cors",
            cache: 'no-cache',
            credentials: 'include',
            headers: {

                'Content-Type': 'application/json;charset=utf-8'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body)
        }).then(res => res.json()).catch(e => console.log(e));
    }
    else{
        return await fetch(uri, {
            method: 'PUT',
            mode: "cors",
            cache: 'no-cache',
            credentials: 'include',
            headers: {

                'Content-Type': 'application/json;charset=utf-8'
            },
            referrerPolicy: 'no-referrer',

        }).then(res => res.json()).catch(e => console.log(e));
    }

}
export {postRequest, postRequestWithFile, getPlacesRequest, deleteReq, putReq, getPosts, deleteReqUri}
