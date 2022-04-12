import {getPosts} from "../../httpUtils/httpRequests";

async function initPosts(ac){
     return await getPosts('http://localhost:3003/news',ac);


}

export {initPosts}
