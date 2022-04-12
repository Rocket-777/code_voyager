import {getPlacesRequest} from "../../../httpUtils/httpRequests";


async function getPlaceById(id, setPlaceData, ac){
    const uri = `http://localhost:3003/places/id/${id}`;
    const data = await getPlacesRequest(uri, ac);
    if(data){

        setPlaceData(data);
    }
    else if(!ac.signal.aborted){
        setPlaceData(data.error);
    }

}

export {getPlaceById}
