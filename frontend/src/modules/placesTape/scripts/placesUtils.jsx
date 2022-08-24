import {getPlaces} from "../../../httpUtils/httpRequests";

async function getPlacesJS(setPlaces, param, ac) {
    const data = await getPlaces(`/places/${param}`, ac);

    if(data){
        setPlaces(data.reverse());
    }



}

async function getFavoritesJS(setPlaces, ac){
    const data = await getPlaces(`/places/favorites`, ac);
    if(data){
        setPlaces(data);
    }


}

export {getPlacesJS, getFavoritesJS}
