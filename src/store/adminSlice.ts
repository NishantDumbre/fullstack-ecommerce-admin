import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserSliceInterface } from "../interfaces/reduxStoreInterface";
import { BASE_URL, LOGIN_URL, SIGNUP_URL } from "../utils/constants/api";

// Async thunk for login/signup
export const submitLoginForm = createAsyncThunk(
  "admin/submitLoginForm",
  async ({ data, pageType }: { data: any; pageType: string }, thunkAPI) => {
    try {
      const endpoint = pageType === "LOGIN" ? LOGIN_URL : SIGNUP_URL;
      const response = await BASE_URL.post(endpoint, data);

      const state = thunkAPI.getState() as { admin: UserSliceInterface };
      console.log("Current State:", state);
        console.log(response.data)
      // Return the response data to be used by extraReducers
      return { data: response.data.admin, pageType };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    id: null,
    email: null,
    loading: false,
    error: null,
  } as UserSliceInterface,
  reducers: {
    logoutAdmin: (state) => {
      state.id = null;
      state.email = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLoginForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitLoginForm.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (action.payload.pageType === "LOGIN") {
          state.id = action.payload.data.id;
          state.email = action.payload.data.email;
        }
      })
      .addCase(submitLoginForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default adminSlice.reducer;
export const { logoutAdmin } = adminSlice.actions;
