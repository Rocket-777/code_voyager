import {AppDispatch} from "../store";
import {userSlice} from "./userSlice";
import {placesSlice} from "./placesSlice";
import {getPlacesRequest} from "../../httpUtils/fetchScripts";
import {getCurrentUser, loginRequest, logoutRequest} from "../../httpUtils/fetchScripts";
import {IUserCredentials} from "../../models/IUser";

// Defining a thunk
export const fetchUser = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(userSlice.actions.userFetching());
        const response = await getCurrentUser();
        dispatch(userSlice.actions.userFetchingSuccess(response));
    }
    catch(e){
        dispatch(userSlice.actions.userFetchingFailed(e.message));
    }
}

export const logInAction = (cred: IUserCredentials, navigateCall: Function) => async (dispatch: AppDispatch) => {
    try{
        await loginRequest(cred);
        dispatch(fetchUser());
        dispatch(userSlice.actions.setUserAuthorized());
        navigateCall();
    }
    catch(e){
        dispatch(userSlice.actions.userFetchingFailed(e.message));
    }

}

export const logOutAction = (navigateCall: Function) => async (dispatch: AppDispatch) => {
    try{
        await logoutRequest();
        dispatch(userSlice.actions.userLogOut());
        navigateCall();
    }
    catch(e){
        dispatch(userSlice.actions.userFetchingFailed(e.message));
    }
}

export const fetchPlaces = (ac: AbortController, approval: string, scrollPosCall: Function) => async (dispatch: AppDispatch) => {
    try{
        dispatch(placesSlice.actions.placesFetching());
        const response = await getPlacesRequest(approval, ac);
        dispatch(placesSlice.actions.placesFetchingSuccess(response));
        scrollPosCall();
    }
    catch(e){
        dispatch(placesSlice.actions.placesFetchingFailed(e.message))
    }
}
