import {deleteReqUri} from "../../../httpUtils/httpRequests.js";

async function deletePost(param, setPosts){
    await deleteReqUri(`http://localhost:3003/news/${param}`);
    setPosts(null);
}

export {deletePost}