

async function tryConnection(dbclient) {
    await dbclient.connect().then(res => console.log('$ Mongodb connection established!')).catch(e => console.log(e));
    await dbclient.close();
}

async function findUsr(dbclient, username){

    await dbclient.connect();
    let searchRes;
    await dbclient.db('proj').collection('users').findOne({username: username}).then(res => {
        if(res != null){
            searchRes = {username: res.username, password: res.password, _id: res._id};
        }
        else searchRes = null;
    })

    dbclient.close();

    return searchRes;
}


export {tryConnection,findUsr};