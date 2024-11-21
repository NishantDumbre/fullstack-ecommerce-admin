import { createSlice } from "@reduxjs/toolkit";
import { ConfigSliceInterface } from "../interfaces/reduxStoreInterface";

const configSlice = createSlice({
    name:'config',
    initialState:{
        theme:'LIGHT'
    } as ConfigSliceInterface,
    reducers:{
        changeTheme: (state, action) =>{
            state.theme = action.payload
        }
    }
})

export default configSlice.reducer
export const {changeTheme} = configSlice.actions