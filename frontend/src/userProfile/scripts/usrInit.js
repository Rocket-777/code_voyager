
async function usrInit(uri, setUsrData){
    const user =  await fetch(uri, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        referrerPolicy: 'no-referrer',

    }).then(res => res.json()).then(res => res).catch(e => console.log(e)); //EXAMPLE OF RETRIVING TEXT DATA


    if(user.status === 0 ){
        setUsrData({username: user.username, status: 'Рядовой пользователь', image: user.image});
    }else if(user.status === 1){
        setUsrData({username: user.username, status: 'Модератор', image: user.image});
    }else if(user.status === 2){
        setUsrData({username: user.username, status: 'Администратор', image: user.image});
    }
    console.log(user.status);

}
export {usrInit}