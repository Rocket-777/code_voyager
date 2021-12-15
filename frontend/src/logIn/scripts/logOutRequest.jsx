import {logOutRequest} from "../../httpUtils/wwwAuth";


async function logOutAction(setAuth, navigate, setUsrData){
    await logOutRequest('http://localhost:3003/logout');
    setAuth(false);
    setUsrData({username: '', status: ''});
    navigate("/log-in");
}

export {logOutAction}
