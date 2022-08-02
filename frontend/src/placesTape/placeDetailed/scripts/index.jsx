import {deleteReq, getPlacesRequest, putReq} from "../../../httpUtils/httpRequests";


async function getPlaceById(id, setPlaceData, ac) {
    const uri = `http://localhost:3003/places/id/${id}`;
    const data = await getPlacesRequest(uri, ac);
    if (data && !data.error) {

        setPlaceData({...data, geo: data.geo.split(',')});
    } else if (!ac.signal.aborted) {
        setPlaceData({error: data.error});
    }

}

async function approvePlace(id) {
    await putReq(`http://localhost:3003/places/${id}`, {approved: true, action: "approval"});
}

async function disApprovePlace(id) {
    await putReq(`http://localhost:3003/places/${id}`, {approved: false, action: "approval"});
}

async function removePlace(id) {
    await deleteReq('http://localhost:3003/places', id);
}

export {getPlaceById, removePlace, approvePlace, disApprovePlace}
