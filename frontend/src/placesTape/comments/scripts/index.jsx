import {postRequest} from "../../../httpUtils/httpRequests";
import {getPosts} from "../../../httpUtils/httpRequests";
import {getPlaceById} from "../../placeDetailed/scripts";

async function sendComment(body, id, resetComment, updateComments){
    const reqData = {postId: id, comment: body};
    await postRequest(`http://localhost:3003/comments`, reqData);
    await getComments(updateComments, id);
    resetComment('');


}

async function getComments (setCommentsData, id){

    const data = await getPosts(`http://localhost:3003/comments/${id}`);
    setCommentsData(await data);

}

async function updatePlaceData(id, update){
    await getPlaceById(id, update);
}
export {sendComment, getComments, updatePlaceData}
