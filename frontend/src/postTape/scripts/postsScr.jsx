import {getPosts} from "../../httpUtils/httpRequests";

async function initPosts(setPosts){
    const data = await getPosts('http://localhost:3003/news');

    setPosts(data.reverse());

}

export {initPosts}