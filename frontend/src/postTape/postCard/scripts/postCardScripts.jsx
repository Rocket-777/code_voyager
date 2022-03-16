import {deleteReqUri} from "../../../httpUtils/httpRequests.js";
import {initPosts} from "../../scripts/postsScr";

async function deletePost(param, setPosts){
    await deleteReqUri(`http://localhost:3003/news/${param}`);
    await initPosts(setPosts);
}

export {deletePost}
