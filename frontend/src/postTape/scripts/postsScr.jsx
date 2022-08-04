import {getPosts} from "../../httpUtils/httpRequests";
import {serverHost} from "../../httpUtils/envVals";
import {postRequest} from "../../httpUtils/httpRequests";


async function initPosts(ac){
     return await getPosts(`${serverHost}/news`,ac);

}

async function submitPost(textVal){
     await postRequest(`${serverHost}/news`, {postBody: textVal}).then(res => res).catch(e => console.log(e));
}

export {initPosts, submitPost}
