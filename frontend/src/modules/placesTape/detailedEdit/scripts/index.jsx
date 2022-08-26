import {postRequestWithFile, putReqFrmData} from "../../../../httpUtils/httpRequests";

async function submitNewPlace(reqData) {
    await postRequestWithFile(`/places/new`, reqData).catch(e => console.log(e));
}

async function editPlace(id, reqData) {
    await putReqFrmData(`/places/` + id, reqData).catch(e => console.log(e));
}

export {submitNewPlace, editPlace}
