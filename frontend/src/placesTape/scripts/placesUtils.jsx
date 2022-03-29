import {getPlacesRequest} from "../../httpUtils/httpRequests";

async function getPlaces(setPlaces, param) {
    const data = await getPlacesRequest(`http://localhost:3003/places/${param}`);
    if(data){
        setPlaces(data.reverse());
    }


}

async function getFavorites(setPlaces){
    const data = await getPlacesRequest('http://localhost:3003/places/favorites');
    if(data){
        setPlaces(data);
    }


}

export {getPlaces, getFavorites}
