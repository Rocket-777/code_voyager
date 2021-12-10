import {findUsrFromKey} from '../dbUtils/mongoUtils.js'

async function sendUserData(req, res, dbclient){
    let credentials;
    if(req.signedCookies.user){
        credentials = await findUsrFromKey(dbclient, req.signedCookies.user);
    }else if(req.signedCookies.moderator){
        credentials = await findUsrFromKey(dbclient, req.signedCookies.moderator);
    }
    else if(req.signedCookies.admin){
        credentials = await findUsrFromKey(dbclient, req.signedCookies.admin);
    }
    res.send({username: credentials.username, status: credentials.status});

    res.end();
}

export {sendUserData}