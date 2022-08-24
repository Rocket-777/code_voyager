import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./reducers/userSlice";
import placesSlice from "./reducers/placesSlice";
const store = configureStore({
    reducer: {
        places: placesSlice,
        user: userSlice,
    },
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
