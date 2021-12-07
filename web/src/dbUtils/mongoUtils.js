import {ObjectId} from "mongodb";

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

async function findUsrFromKey(dbclient, id){

    await dbclient.connect();
    let searchRes;
    await dbclient.db('proj').collection('users').findOne({_id: ObjectId(id)}).then(res => {
        if(res != null){

            searchRes = {username: res.username, password: res.password, _id: res._id};
        }
        else searchRes = null;
    })

    dbclient.close();
    //console.log(searchRes);
    return await searchRes;
}
export {tryConnection,findUsr, findUsrFromKey};