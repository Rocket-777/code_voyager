import {postRequest} from "../../../httpUtils/httpRequests.js";
import {initPosts} from "../../scripts/postsScr";

async function sendPost(text, setText, setPosts){
    await postRequest('http://localhost:3003/news', {postBody: text});

    setText('');
    await initPosts(setPosts);
}

export {sendPost}
