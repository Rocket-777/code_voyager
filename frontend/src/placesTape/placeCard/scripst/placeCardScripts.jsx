import {deleteReq, putReq} from "../../../httpUtils/httpRequests.js";


async function removePlace(id, setPlaces){
    await deleteReq('http://localhost:3003/places', id);
    setPlaces(null);
}


async function approvePlace(id, setPlaces){
    await putReq(`http://localhost:3003/places/${id}`, {approved: true})
    setPlaces(null);
}
export {removePlace, approvePlace}