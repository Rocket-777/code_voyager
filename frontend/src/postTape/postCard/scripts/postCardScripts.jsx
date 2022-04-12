import {deleteReqUri, getPlacesRequest, putReq} from "../../../httpUtils/httpRequests.js";
import {initPosts} from "../../scripts/postsScr";

async function deletePost(param, setPosts, ac){
    await deleteReqUri(`http://localhost:3003/news/${param}`);
    await initPosts(ac).then(res => setPosts(res.reverse()));
}


async function setPostById(id, setPlaceData, ac){
    const uri = `http://localhost:3003/news/${id}`;
    const data = await getPlacesRequest(uri, ac);
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
