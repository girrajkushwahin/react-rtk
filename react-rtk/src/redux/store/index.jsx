import { configureStore } from "@reduxjs/toolkit";
import UserSlice from '../slices/UserSlice'

const store = configureStore({
    reducer: {
        users: UserSlice
    },
    // if it is a single function or single slice, it will be directly used as the root reducer for the store.
    // if it is an object of multiple slices then it will treat like combineReducers
})

export default store
