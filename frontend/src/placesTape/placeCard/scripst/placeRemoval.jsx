import {deleteReq} from "../../../httpUtils/httpRequests.js";


async function removePlace(id, setPlaces){
    await deleteReq('http://localhost:3003/places', id);
    setPlaces(null);
}

export {removePlace}