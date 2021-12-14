
async function usrInit(uri, setUsrData){
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


    if(user.status === 0 ){
        setUsrData({username: user.username, status: 'Рядовой пользователь'});
    }else if(user.status === 1){
        setUsrData({username: user.username, status: 'Модератор'});
    }else if(user.status === 2){
        setUsrData({username: user.username, status: 'Администратор'});
    }
    console.log(user.status);

}
export {usrInit}