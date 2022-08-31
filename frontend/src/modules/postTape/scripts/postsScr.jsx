import {postRequest} from "../../../httpUtils/httpRequests";


async function submitPost(textVal){
     await postRequest(`/news`, {postBody: textVal}).then(res => res).catch(e => console.log(e));
}

export { submitPost}
