import base64 from "base-64";
import {validateUser} from "./validation.js";
import {ObjectId} from "mongodb";

function splitToString(arr, splitPoint) {
    let firstArr = [];
    let secArr = [];
    let pointThru = false;
    for (let x = 0, y = 0, z = 0; x < arr.length; x++) {
        if (arr[x] === splitPoint) {
            pointThru = true
            continue;
        }
        if (pointThru) {
            secArr[y] = arr[x];
            y++;
        } else {
            firstArr[z] = arr[x];
            z++;
        }
    }
    return {first: firstArr.join(""), second: secArr.join("")};
}

async function cookieAuthorization(req, res, dbClient) {
    let validation = 'no authorization data';
    let cookieCheck = req.signedCookies.user;
    if (!cookieCheck) {
        let authIntel = req.headers.authorization;
        if (!authIntel) {
            res.setHeader("WWW-Authenticate", "xBasic");
            res.status(401).send(validation);

        } else {
            let decodedUsrPass = base64.decode(splitToString(authIntel, ' ').second);
            let usrCredentials = splitToString(decodedUsrPass, ':');
            const username = usrCredentials.first;
            const password = usrCredentials.second;
            console.log(username + ' $ ' + password);
            validation = await validateUser(username, password, dbClient);
            console.log(validation);
            if (validation._id != null) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
                res.cookie('user', ObjectId(validation._id), {signed: true}); //TODO ENV COOKIE PATH
                res.send('Signed In !');
            } else {
                res.setHeader("WWW-Authenticate", "xBasic");
                res.status(401).send(validation);
            }
        }
    }
    res.end();
}

export {cookieAuthorization};