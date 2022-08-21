import {postRequest} from "../../../../httpUtils/httpRequests.ts";
import {initPosts} from "../../scripts/postsScr";
import {serverHost} from "../../../../httpUtils/envVals";

async function sendPost(text, setText, setPosts){
    await postRequest(`${serverHost}/news`, {postBody: text});
    setText('');
    await initPosts(setPosts);


}

export {sendPost}
