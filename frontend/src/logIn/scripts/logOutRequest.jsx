import {logOutRequest} from "../../httpUtils/wwwAuth";
import {serverHost} from "../../httpUtils/envVals";

async function logOutAction(setAuth, navigate, setUsrData){
    await logOutRequest(`${serverHost}/logout`);
    setAuth(false);
    setUsrData({username: '', status: ''});
    navigate("/log-in");
}

export {logOutAction}
