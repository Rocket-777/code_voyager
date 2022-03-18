import {getPlacesRequest} from "../../../httpUtils/httpRequests";


async function getPlaceById(id, setPlaceData){
    const uri = `http://localhost:3003/places/id/${id}`;
    const data = await getPlacesRequest(uri);
    if(data){

        setPlaceData(data);
    }
    else{
        setPlaceData(data.error);
    }

}

export {getPlaceById}
