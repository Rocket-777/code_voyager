import {ObjectId} from "mongodb";



async function findUsr(dbclient, username){
    let searchRes;

    await dbclient.collection('users').findOne({username: username}).then(res => {

        if(res != null){
            searchRes = {username: res.username, password: res.password, _id: res._id, status: res.status};
        }
        else searchRes = null;
    })

    return searchRes;
}

async function findUsrFromKey(dbclient, id){

    let searchRes;
    await dbclient.collection('users').findOne({_id: ObjectId(id)}).then(res => {
        if(res != null){

            searchRes = {username: res.username, password: res.password, _id: res._id, status: res.status, image: res.image};
        }
        else searchRes = null;
    })


    //console.log(searchRes);
    return await searchRes;
}
async function getAllUsers(dbclient, req){
    let usersAll = [];



    await dbclient.collection('users').find().forEach(resp => {

        if(ObjectId(resp._id).toString() !== req.signedCookies.user){
            usersAll.push(resp);
        }

    }).then(res => res);

    return usersAll;

}



export {findUsr, findUsrFromKey, getAllUsers};