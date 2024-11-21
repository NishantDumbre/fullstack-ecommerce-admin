import { configureStore } from "@reduxjs/toolkit";
import configReducer from './configSlice'

const appStore = configureStore({
    reducer:{
        config: configReducer
    }
})


export default appStore 
export type StoreState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch