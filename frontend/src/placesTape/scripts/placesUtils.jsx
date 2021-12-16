import {getPlacesRequest} from "../../httpUtils/httpRequests";

async function getPlaces(setPlaces, param) {
    const data = await getPlacesRequest(`http://localhost:3003/places/${param}`);

    setPlaces(data);

}

export {getPlaces}