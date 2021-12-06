async function postRequest(uri, body){

    fetch(uri, {
        method: 'POST',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },

        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    }).then(res => console.log(res)).catch(e => console.log(e));
}

export {postRequest}