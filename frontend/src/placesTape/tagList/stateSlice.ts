import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";

export const testSlice = createSlice({
    name: 'test',
    initialState: {
        value: 'test_initial'
    },
    reducers: {
        setValue: (state, val:PayloadAction<string>) => {
            state.value = val.payload;
        }
    }
})

export const {setValue} = testSlice.actions;
export const selectVal = (state: RootState) => state.test.value;
export default testSlice.reducer;
