import {logOutRequest} from "../../../httpUtils/wwwAuth";


async function logOutAction(setAuth, navigate, setUsrData){
    await logOutRequest(`/logout`);
    setAuth(false);
    setUsrData({username: '', status: ''});

    navigate("/log-in");

}

export {logOutAction}
