import {putReq} from "../../../../httpUtils/httpRequests.ts";

async function likeAction(id) {
    await putReq(`/places/${id}/like`, null);

}

async function favoriteAction(id) {
    await putReq(`/places/${id}/favorite`, null);
}

export { likeAction, favoriteAction}
