import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./reducers/userSlice";
import placesSlice from "./reducers/placesSlice";
import detailedSlice from "./reducers/placeInfoSlice";
import postsSlice from "./reducers/postsSlice";
const store = configureStore({
    reducer: {
        places: placesSlice,
        user: userSlice,
        detailed: detailedSlice,
        posts: postsSlice,
    },
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
