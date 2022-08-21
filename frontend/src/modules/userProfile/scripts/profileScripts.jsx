import {postRequestWithFile, deleteReq} from "../../../httpUtils/httpRequests.ts";
import {serverHost} from "../../../httpUtils/envVals";

async function sendUserImage(image){
    await postRequestWithFile(`${serverHost}/userImage`, image);

}

async function removeUserImage(){
    await deleteReq(`${serverHost}/userImage`);
}

export {sendUserImage, removeUserImage}
