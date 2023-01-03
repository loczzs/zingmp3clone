import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./slices/HomeSlice";
import MusicSlice from "./slices/MusicSlice";

const store = configureStore({
    reducer:{
        home:HomeSlice,
        music:MusicSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store