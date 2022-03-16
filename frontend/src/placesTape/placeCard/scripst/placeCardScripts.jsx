import {deleteReq, putReq} from "../../../httpUtils/httpRequests.js";
import {getPlaces} from "../../scripts/placesUtils";

async function removePlace(id, setPlaces, placeState){


    await deleteReq('http://localhost:3003/places', id);

    await getPlaces(setPlaces, placeState);


}


async function approvePlace(id, setPlaces){
    await putReq(`http://localhost:3003/places/${id}`, {approved: true})
    setPlaces(null);
}
export {removePlace, approvePlace}
