import {deleteReqUri, getPlacesRequest, putReq} from "../../../../httpUtils/httpRequests.ts";
import {initPosts} from "../../scripts/postsScr";
import {serverHost} from "../../../../httpUtils/envVals";

async function deletePost(param, setPosts, ac){
    await deleteReqUri(`${serverHost}/news/${param}`);
    await initPosts(ac).then(res => setPosts(res.reverse()));
}


async function setPostById(id, setPlaceData, ac){
    const uri = `${serverHost}/news/${id}`;
    const data = await getPlacesRequest(uri, ac);
    if(data){

        setPlaceData(data);
    }
    else{
        setPlaceData(data.error);
    }

}

async function postLikeAction(id){
    await putReq(`${serverHost}/news/${id}/like`, null);

}


export {deletePost, setPostById, postLikeAction}
