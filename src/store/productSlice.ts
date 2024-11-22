import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductSliceInterface } from "../interfaces/reduxStoreInterface";
import {
  ADD_CATEGORY_URL,
  BASE_URL,
  REMOVE_CATEGORY_URL,
} from "../utils/constants/api";

export const addProductCategory = createAsyncThunk(
  "admin/addProductCategory",
  async ({ data }: { data: any }, thunkAPI) => {
    try {
        console.log(data)
      const response = await BASE_URL.post(ADD_CATEGORY_URL, data);

      const state = thunkAPI.getState();
      console.log("Current State:", state);
      console.log(response.data);
      return {
        id: response.data.id,
        category: response.data.category,
        totalProducts: response.data.totalProducts,
      };
    } catch (error: any) {
        console.log(error)
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

export const removeProductCategory = createAsyncThunk(
  "admin/removeProductCategory",
  async ({ data }: { data: any }, thunkAPI) => {
    try {
      const response = await BASE_URL.post(REMOVE_CATEGORY_URL, data);

      const state = thunkAPI.getState();
      console.log("Current State:", state);
      console.log(response.data);
      return { removeId: data };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

const productSlice = createSlice({
  name: "admin",
  initialState: {
    categories: [],
    products: [],
    loading: false,
    error: null,
  } as ProductSliceInterface,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categories.push(action.payload);
      })
      .addCase(addProductCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(removeProductCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeProductCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { removeId } = action.payload;
        const filteredCategories = state.categories.filter(
          (category) => category.id !== removeId
        );
        console.log(filteredCategories);
        state.categories = filteredCategories;
      })
      .addCase(removeProductCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
// export const { logoutAdmin } = productSlice.actions;
