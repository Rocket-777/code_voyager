import {postRequest} from "../../../../httpUtils/httpRequests.ts";
import {initPosts} from "../../scripts/postsScr";

async function sendPost(text, setText, setPosts){
    await postRequest(`/news`, {postBody: text});
    setText('');
    await initPosts(setPosts);


}

export {sendPost}
