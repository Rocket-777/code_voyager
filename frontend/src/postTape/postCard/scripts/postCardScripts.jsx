import {deleteReqUri, getPlacesRequest, putReq} from "../../../httpUtils/httpRequests.js";
import {initPosts} from "../../scripts/postsScr";

async function deletePost(param, setPosts){
    await deleteReqUri(`http://localhost:3003/news/${param}`);
    await initPosts().then(res => setPosts(res));
}


async function setPostById(id, setPlaceData){
    const uri = `http://localhost:3003/news/${id}`;
    const data = await getPlacesRequest(uri);
    if(data){

        setPlaceData(data);
    }
    else{
        setPlaceData(data.error);
    }

}

async function postLikeAction(id){
    await putReq(`http://localhost:3003/news/${id}/like`, null);

}


export {deletePost, setPostById, postLikeAction}
