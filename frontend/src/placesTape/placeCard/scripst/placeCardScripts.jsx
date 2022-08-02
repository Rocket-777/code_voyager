import {deleteReq, putReq} from "../../../httpUtils/httpRequests.js";
import {getPlaces} from "../../scripts/placesUtils";

async function removePlace(id, setPlaces, placeState, ac) {


    await deleteReq('http://localhost:3003/places', id);

    await getPlaces(setPlaces, placeState, ac);


}


async function approvePlace(id, setPlaces, placeState, ac) {
    await putReq(`http://localhost:3003/places/${id}`, {approved: true})
    await getPlaces(setPlaces, placeState, ac);
}

async function likeAction(id) {
    await putReq(`http://localhost:3003/places/${id}/like`, null);

}

async function favoriteAction(id) {
    await putReq(`http://localhost:3003/places/${id}/favorite`, null);
}

export {removePlace, approvePlace, likeAction, favoriteAction}
