import {getPlaces} from "../../../httpUtils/httpRequests";


async function getFavoritesJS(setPlaces, ac){
    const data = await getPlaces(`/places/favorites`, ac);
    if(data){
        setPlaces(data);
    }


}

export {getFavoritesJS}
