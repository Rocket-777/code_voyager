import {logOutRequest} from "../../../httpUtils/wwwAuth";


async function logOutAction(navigate){
    await logOutRequest(`/logout`);
    navigate("/log-in");
}

export {logOutAction}
