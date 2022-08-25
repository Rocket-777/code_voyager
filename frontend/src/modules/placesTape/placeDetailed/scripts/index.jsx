import {deleteReq, getPlaces, putReq} from "../../../../httpUtils/httpRequests";


async function getPlaceById(id, setPlaceData, ac) {
    const uri = `/places/id/${id}`;
    const data = await getPlaces(uri, ac);
    if (data && !data.error) {

        setPlaceData({...data, geo: data.geo.split(',')});
    } else if (!ac.signal.aborted) {
        setPlaceData({error: data.error});
    }

}

async function approvePlace(id) {
    await putReq(`/places/${id}`, {approved: true, action: "approval"});
}

async function disApprovePlace(id) {
    await putReq(`/places/${id}`, {approved: false, action: "approval"});
}

async function removePlace(id) {
    await deleteReq(`/places`, id);
}

export {getPlaceById, removePlace, approvePlace, disApprovePlace}
