import {deleteReq, getPlaces, putReq} from "../../../../httpUtils/httpRequests";
import {serverHost} from "../../../../httpUtils/envVals";

async function getPlaceById(id, setPlaceData, ac) {
    const uri = `${serverHost}/places/id/${id}`;
    const data = await getPlaces(uri, ac);
    if (data && !data.error) {

        setPlaceData({...data, geo: data.geo.split(',')});
    } else if (!ac.signal.aborted) {
        setPlaceData({error: data.error});
    }

}

async function approvePlace(id) {
    await putReq(`${serverHost}/places/${id}`, {approved: true, action: "approval"});
}

async function disApprovePlace(id) {
    await putReq(`${serverHost}/places/${id}`, {approved: false, action: "approval"});
}

async function removePlace(id) {
    await deleteReq(`${serverHost}/places`, id);
}

export {getPlaceById, removePlace, approvePlace, disApprovePlace}
