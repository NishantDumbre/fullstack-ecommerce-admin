import { configureStore } from "@reduxjs/toolkit";
import configReducer from './configSlice'
import adminReducer from './adminSlice'

const appStore = configureStore({
    reducer:{
        config: configReducer,
        admin: adminReducer
    }
})


export default appStore 
export type StoreState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch