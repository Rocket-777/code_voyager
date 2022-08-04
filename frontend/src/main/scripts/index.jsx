import {serverHost} from "../../httpUtils/envVals";
import {usrInit} from "../../userProfile/scripts/usrInit";

async function initializeUser(setUsrData){
    usrInit(`${serverHost}/home`, setUsrData).catch(e => console.log(e));
}

export {initializeUser}
