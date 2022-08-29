import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPlaceDetailed} from "../../models/IPlace";

interface DetailedState{
    data: IPlaceDetailed,
    dataToEdit: IPlaceDetailed,
    isLoading: boolean,
    error: string,
    editable: boolean,
    refreshing: boolean
}

const initialState: DetailedState = {
    data: {
        _id: '',
        place_name: '',
        place_description: '',
        place_description_full: '',
        place_address: '',
        contact_info: '',
        geo: '54.514, 36.26',
        image: '',
        likes: 0,
        comments: 0,
        isFavorite: false,
        isLiked: false,
        approved: false
    },
    dataToEdit: {
        _id: '',
        place_name: '',
        place_description: '',
        place_description_full: '',
        place_address: '',
        contact_info: '',
        geo: '54.514, 36.26',
        image: '',
        likes: 0,
        comments: 0,
        isFavorite: false,
        isLiked: false,
        approved: false
    },
    isLoading: false,
    error: '',
    editable: false,
    refreshing: false
}

export const detailedSlice = createSlice({
    name: 'detailed',
    initialState,
    reducers: {
        fetchPlaceSuccess(state, action: PayloadAction<IPlaceDetailed>){
            state.data = action.payload;
            state.isLoading = false;
            state.refreshing = false;
        },
        fetchPlaceFailed(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        placeFetching(state){
            state.isLoading = true;
        },
        setEditable(state, action: PayloadAction<boolean>){
            state.editable = action.payload;
        },
        resetPlaceDetailed(){
            return initialState;
        },
        placeRefreshing(state){
            state.refreshing = true;
        },
        setApproved(state, action: PayloadAction<boolean>){
            state.data.approved = action.payload;
        },
        setPlaceData(state, action: PayloadAction<IPlaceDetailed>){
            state.data = action.payload;
        },
        startEdit(state){
            state.dataToEdit = state.data;
        },
        finishEdit(state){
            state.dataToEdit = initialState.dataToEdit;
        },
        setEditData(state, action: PayloadAction<IPlaceDetailed>){
            state.dataToEdit = action.payload;
        },
        setPlaceRefresh(state, action: PayloadAction<boolean>){
            state.refreshing = action.payload;
        },


    }
})

export default detailedSlice.reducer;
