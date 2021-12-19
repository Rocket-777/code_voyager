import {postRequest} from "../../../httpUtils/httpRequests.js";

async function sendPost(text, setText, setPosts){
    await postRequest('http://localhost:3003/news', {postBody: text});

    setText('');
    setPosts(null);
}

export {sendPost}