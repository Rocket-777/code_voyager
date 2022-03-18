import {postRequest} from "../../../httpUtils/httpRequests";
import {getPosts} from "../../../httpUtils/httpRequests";


async function sendComment(body, id, resetComment, updateComments){
    const reqData = {postId: id, comment: body};
    await postRequest(`http://localhost:3003/comments`, reqData);
    resetComment('');
    await getComments(updateComments, id);
}

async function getComments (setCommentsData, id){

    const data = await getPosts(`http://localhost:3003/comments/${id}`);
    setCommentsData(data);
}

export {sendComment, getComments}
