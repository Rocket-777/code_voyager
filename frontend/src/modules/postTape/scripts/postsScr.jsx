import {getPosts} from "../../../httpUtils/httpRequests";
import {postRequest} from "../../../httpUtils/httpRequests";


async function initPosts(ac){
     return await getPosts(`/news`,ac);

}

async function submitPost(textVal){
     await postRequest(`/news`, {postBody: textVal}).then(res => res).catch(e => console.log(e));
}

export {initPosts, submitPost}
