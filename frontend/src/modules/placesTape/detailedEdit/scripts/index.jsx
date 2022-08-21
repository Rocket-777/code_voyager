import {postRequestWithFile, putReqFrmData} from "../../../../httpUtils/httpRequests";
import {serverHost} from "../../../../httpUtils/envVals";

async function submitNewPlace(reqData) {
    await postRequestWithFile(`${serverHost}/places/new`, reqData).catch(e => console.log(e));
}

async function editPlace(id, reqData) {
    await putReqFrmData(`${serverHost}/places/` + id, reqData).catch(e => console.log(e));
}

export {submitNewPlace, editPlace}
