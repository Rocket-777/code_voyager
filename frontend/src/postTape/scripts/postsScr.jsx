import {getPosts} from "../../httpUtils/httpRequests";

async function initPosts(){
     return await getPosts('http://localhost:3003/news');


}

export {initPosts}
