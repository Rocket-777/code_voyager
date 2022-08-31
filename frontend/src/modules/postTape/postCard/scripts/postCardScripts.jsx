import {deleteReqUri, getPlaces, putReq} from "../../../../httpUtils/httpRequests.ts";


async function deletePost(param) {
    await deleteReqUri(`/news/${param}`);
}


async function setPostById(id, setPostData, ac) {
    const uri = `/news/${id}`;
    const data = await getPlaces(uri, ac);
    if (data) {
        setPostData(data);
    } else {
        setPostData(data.error);
    }

}

async function postLikeAction(id) {
    await putReq(`/news/${id}/like`, null);

}


export {deletePost, setPostById, postLikeAction}
