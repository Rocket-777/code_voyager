import {authRequest, logOutQuarry} from "./wwwAuth";
import {getPlaces} from "./httpRequests";
import {IUser, IUserCredentials} from "../models/IUser";
export async function getCurrentUser(){

    const url: string = `/home`;
    const headers : object = {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        referrerPolicy: 'no-referrer'
    }

    const response = await fetch(url, headers).then(res => res.json()).catch(e => console.log(e));
    const userStatus: string = response ? (response.status === 0 ? 'Admin' : response.status === 1 ? 'Moderator' : 'User') : 'err';
    let data: IUser = {
        username: response.username ? response.username : '',
        status: userStatus,
        image: response.image ? response.image : ''
    }
    return data;
}

export async function loginRequest(credentials: IUserCredentials){
    const url = '/login'
    return await authRequest(url, credentials);
}
export async function logoutRequest(){
    return await logOutQuarry('/logout')
}

export async function getPlacesRequest(approval: string, ac: AbortController){
    return await getPlaces(`/places/${approval}`, ac)
}
export async function getFavoritesRequest(ac: AbortController){
    return  await getPlaces(`/places/favorites`, ac);
}
export async function getPlaceRequest(id: string, ac: AbortController){
    return await getPlaces(`/places/id/${id}`, ac);
}
