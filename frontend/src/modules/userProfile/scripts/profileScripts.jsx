import {postRequestWithFile, deleteReq} from "../../../httpUtils/httpRequests.ts";

async function sendUserImage(image){
    await postRequestWithFile(`/userImage`, image);

}

async function removeUserImage(){
    await deleteReq(`/userImage`);
}

export {sendUserImage, removeUserImage}
