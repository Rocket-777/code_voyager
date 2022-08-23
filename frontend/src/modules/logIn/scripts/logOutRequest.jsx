import {logOutQuarry} from "../../../httpUtils/wwwAuth";


async function logOutAct(navigate){
    await logOutQuarry(`/logout`);
    navigate("/log-in");
}

export {logOutAct}
