import {postRequestWithFile, deleteReq} from "../../httpUtils/httpRequests.js";

async function sendUserImage(image, setAuth){
    await postRequestWithFile("http://localhost:3003/userImage", image);

}

async function removeUserImage(){
    await deleteReq("http://localhost:3003/userImage");
}

export {sendUserImage, removeUserImage}
