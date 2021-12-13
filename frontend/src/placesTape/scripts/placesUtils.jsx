import {getPlacesRequest} from "../../httpUtils/httpRequests";

async function getPlaces(setPlaces) {
    const data = await getPlacesRequest('http://localhost:3003/places');

    setPlaces(data);

}

export {getPlaces}