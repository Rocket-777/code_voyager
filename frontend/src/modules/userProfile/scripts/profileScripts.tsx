import {postRequestWithFile, deleteReq} from "../../../httpUtils/httpRequests";

async function sendUserImage(image: FormData){
    await postRequestWithFile(`/userImage`, image);

}

async function removeUserImage(){
    await deleteReq(`/userImage`);
}

export {sendUserImage, removeUserImage}
