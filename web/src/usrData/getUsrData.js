import {findUsrFromKey} from '../dbUtils/mongoUtils.js'

async function sendUserData(req, res, dbclient){
    const credentials = await findUsrFromKey(dbclient, req.signedCookies.user);

    res.send({key: req.signedCookies.user, username: credentials.username});

    res.end();
}

export {sendUserData}