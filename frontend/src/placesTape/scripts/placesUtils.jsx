import {getPlacesRequest} from "../../httpUtils/httpRequests";
import {serverHost} from "../../httpUtils/envVals";

async function getPlaces(setPlaces, param, ac) {
    const data = await getPlacesRequest(`${serverHost}/places/${param}`, ac);

    if(data){
        setPlaces(data.reverse());
    }



}

async function getFavorites(setPlaces, ac){
    const data = await getPlacesRequest(`${serverHost}/places/favorites`, ac);
    if(data){
        setPlaces(data);
    }


}

export {getPlaces, getFavorites}
