import {deleteReq, putReq} from "../../../httpUtils/httpRequests.js";
import {getPlaces} from "../../scripts/placesUtils";

async function removePlace(id, setPlaces, placeState){


    await deleteReq('http://localhost:3003/places', id);

    await getPlaces(setPlaces, placeState);


}


async function approvePlace(id, setPlaces, placeState){
    await putReq(`http://localhost:3003/places/${id}`, {approved: true})
    await getPlaces(setPlaces, placeState);
}

async function likeAction(id){
    await putReq(`http://localhost:3003/places/${id}/like`, null);

}

export {removePlace, approvePlace, likeAction}
