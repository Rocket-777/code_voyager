import {AppDispatch} from "../store";
import {userSlice} from "./userSlice";
import {getCurrentUser} from "../../httpUtils/fetchScripts";


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
