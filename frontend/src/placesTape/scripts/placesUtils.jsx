import {getPlacesRequest} from "../../httpUtils/httpRequests";

async function getPlaces(setPlaces, param, ac) {
    const data = await getPlacesRequest(`http://localhost:3003/places/${param}`, ac);

    if(data){
        setPlaces(data.reverse());
    }



}

async function getFavorites(setPlaces, ac){
    const data = await getPlacesRequest('http://localhost:3003/places/favorites', ac);
    if(data){
        setPlaces(data);
    }


}

export {getPlaces, getFavorites}
