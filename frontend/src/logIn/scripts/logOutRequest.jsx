import {logOutRequest} from "../../httpUtils/wwwAuth";


async function logOutAction(setAuth, navigate){
    await logOutRequest('http://localhost:3003/logout');
    setAuth(false);

    navigate("/log-in");
}

export {logOutAction}
