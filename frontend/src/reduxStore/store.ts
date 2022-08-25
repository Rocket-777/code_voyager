import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./reducers/userSlice";
import placesSlice from "./reducers/placesSlice";
import detailedSlice from "./reducers/placeInfoSlice";
const store = configureStore({
    reducer: {
        places: placesSlice,
        user: userSlice,
        detailed: detailedSlice,
    },
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
