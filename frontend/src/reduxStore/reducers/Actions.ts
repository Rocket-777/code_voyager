import {AppDispatch} from "../store";
import {userSlice} from "./userSlice";
import {getCurrentUser, loginRequest} from "../../httpUtils/fetchScripts";
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

export const logOutAction = () => async (dispatch: AppDispatch) => {

}

