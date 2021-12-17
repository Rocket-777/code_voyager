import {findUsrFromKey} from '../dbUtils/mongoUtils.js'

import {ObjectId} from "mongodb";

async function sendUserData(req, res, dbclient){
    let credentials;
    let usrStat = null;
    if(req.signedCookies.user){
        credentials = await findUsrFromKey(dbclient, req.signedCookies.user);
        usrStat = 0;
    }else if(req.signedCookies.moderator){
        credentials = await findUsrFromKey(dbclient, req.signedCookies.moderator);
        usrStat = 1;
    }
    else if(req.signedCookies.admin){
        credentials = await findUsrFromKey(dbclient, req.signedCookies.admin);
        usrStat = 2;
    }
    if(credentials.status !== usrStat){

        if(credentials.status === 0){

            res.cookie('user', ObjectId(credentials._id),  {signed: true});
            res.clearCookie('admin');
            res.clearCookie('moderator');
        }
        else if(credentials.status === 1){
            res.cookie('moderator', ObjectId(credentials._id), {signed: true});
            res.clearCookie('admin');
            res.clearCookie('user');

        }
        else if(credentials.status === 2){
            res.cookie('admin', ObjectId(credentials._id), {signed: true});
            res.clearCookie('user');
            res.clearCookie('moderator');
        }
    }
    res.send({username: credentials.username, status: credentials.status, image: credentials.image});

    res.end();
}

export {sendUserData}