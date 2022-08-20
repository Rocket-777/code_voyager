import { configureStore } from '@reduxjs/toolkit'
import testReducer from './placesTape/tagList/stateSlice'

const store = configureStore({
    reducer: {
        test: testReducer,
    },
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
