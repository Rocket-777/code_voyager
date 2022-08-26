import {getPosts, postRequest} from "../../../../httpUtils/httpRequests";
import {getPlaceById} from "../../placeDetailed/scripts";


async function sendComment(body, id, resetComment, updateComments, commentOf, ac) {

    const reqData = {postId: id, comment: body, commentOf: commentOf};
    resetComment('');
    await postRequest(`/comments`, reqData);
    await getComments(updateComments, id, ac);


}

async function getComments(setCommentsData, id, ac) {

    const data = await getPosts(`/comments/${id}`, ac).then(res => {
        if (res) setCommentsData(res)
    });


}

async function updatePlaceData(id, update, ac) {
    await getPlaceById(id, update, ac);
}

export {sendComment, getComments, updatePlaceData}
