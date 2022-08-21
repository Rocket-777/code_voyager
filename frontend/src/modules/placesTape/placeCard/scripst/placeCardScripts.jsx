import {deleteReq, putReq} from "../../../../httpUtils/httpRequests.ts";
import {getPlaces} from "../../scripts/placesUtils";
import {serverHost} from "../../../../httpUtils/envVals";

async function removePlace(id, setPlaces, placeState, ac) {


    await deleteReq(`${serverHost}/places`, id);

    await getPlaces(setPlaces, placeState, ac);


}


async function approvePlace(id, setPlaces, placeState, ac) {
    await putReq(`${serverHost}/places/${id}`, {approved: true})
    await getPlaces(setPlaces, placeState, ac);
}

async function likeAction(id) {
    await putReq(`${serverHost}/places/${id}/like`, null);

}

async function favoriteAction(id) {
    await putReq(`${serverHost}/places/${id}/favorite`, null);
}

export {removePlace, approvePlace, likeAction, favoriteAction}
