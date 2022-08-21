import {serverHost} from "./envVals";
import {IUser} from "../models/IUser";
export async function getCurrentUser(){

    const url: string = `${serverHost}/home`;
    const headers : object = {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'include',
        referrerPolicy: 'no-referrer'
    }

    const response = await fetch(url, headers).then(res => res.json()).catch(e => console.log(e));
    const userStatus: string = response ? (response.status === 0 ? 'Admin' : response.status === 1 ? 'Moder' : 'User') : 'err';
    let data: IUser = {
        username: response.username ? response.username : 'err',
        status: userStatus,
        image: response.image ? response.image : 'err'
    }
    return data;
}

