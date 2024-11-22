import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import adminReducer from "./adminSlice";
import productReducer from "./productSlice";

const appStore = configureStore({
  reducer: {
    config: configReducer,
    admin: adminReducer,
    product: productReducer,
  },
});

export default appStore;
export type StoreState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
