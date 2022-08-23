import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

interface UserState {
    userData: IUser,
    isLoading: boolean,
    error: string,
    authorized: boolean
}

const initialState: UserState = {
    userData:{
      username:'',
      status: '',
      image: ''
    },
    isLoading: false,
    authorized: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetching(state){
            state.isLoading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<IUser>){
            state.isLoading = false;
            state.error = '';
            state.userData.username = action.payload.username;
            state.userData.status = action.payload.status;
            state.userData.image = action.payload.image
        },
        userFetchingFailed(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        setUserAuthorized(state){
            state.authorized = true;
        },
        setUserUnauthorized(state){
            state.authorized = false;
        },
        userLogOut(){
            return initialState;
        }
    }
});

export default userSlice.reducer;
