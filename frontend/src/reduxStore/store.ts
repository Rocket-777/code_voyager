import { configureStore } from '@reduxjs/toolkit'
import testReducer from './reducers/stateSlice'
import userSlice from "./reducers/userSlice";
const store = configureStore({
    reducer: {
        test: testReducer,
        user: userSlice,
    },
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
