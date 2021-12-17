import {postRequestWithFile, deleteReq} from "../../httpUtils/httpRequests.js";

async function sendUserImage(image, setAuth){
    await postRequestWithFile("http://localhost:3003/userImage", image);
    setAuth(false);

}

async function removeUserImage(setAuth){
    await deleteReq("http://localhost:3003/userImage");
    setAuth(false);
}

export {sendUserImage, removeUserImage}