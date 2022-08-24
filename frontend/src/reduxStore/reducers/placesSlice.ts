import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPlaceCard} from "../../models/IPlace";

interface PlacesState {
    data: IPlaceCard[],
    isLoading: boolean,
    error: string,
    showApproved: string
}

const initialState: PlacesState = {
    data: [],
    isLoading: false,
    error: '',
    showApproved: 'approved'
}

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        placesFetching(state) {
            state.isLoading = true;
        },
        placesFetchingSuccess(state, action: PayloadAction<IPlaceCard[]>) {
            state.data = action.payload;
            state.isLoading = false;
        },
        placesFetchingFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setShowProposed(state){
            state.showApproved = 'proposed';
        },
        setShowApproved(state){
            state.showApproved = 'approved';
        },
        placesReset(){
            return initialState
        }
    }
});

export default placesSlice.reducer;
