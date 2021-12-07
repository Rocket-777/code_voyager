
async function usrInit(uri, setUsr){
    const user =  await fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        headers: {
           // 'Authorization' : 'Basic ' + base64.encode(body.username + ':' + body.password),

        },
        referrerPolicy: 'no-referrer',

    }).then(res => res.json()).then(res => res).catch(e => console.log(e)); //EXAMPLE OF RETRIVING TEXT DATA

    setUsr(user.username);

}
export {usrInit}