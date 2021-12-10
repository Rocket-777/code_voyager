import {findUsr} from "../dbUtils/mongoUtils.js";


async function validateUser(username, password, dbClient){
    const credentials = await findUsr(dbClient, username).catch(e => console.log(e));

    if(credentials != null){
        if(username === credentials.username){
            console.log('USERNAME_: ' + username + ' ACCEPTED')
            if(password === credentials.password){
                console.log('PASSWORD_: ' + username + ' ACCEPTED')
                return credentials;
            }
            else return 'wrong password';
        }
    }
    else return 'no such user'
}

export {validateUser};