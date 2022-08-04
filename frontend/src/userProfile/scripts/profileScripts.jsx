import {postRequestWithFile, deleteReq} from "../../httpUtils/httpRequests.js";
import {serverHost} from "../../httpUtils/envVals";

async function sendUserImage(image){
    await postRequestWithFile(`${serverHost}/userImage`, image);

}

async function removeUserImage(){
    await deleteReq(`${serverHost}/userImage`);
}

export {sendUserImage, removeUserImage}
