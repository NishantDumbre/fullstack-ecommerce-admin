import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductSliceInterface } from "../interfaces/reduxStoreInterface";
import {
  ADD_CATEGORY_URL,
  BASE_URL,
  FETCH_PRODUCT_AND_CATEOGRY_URL,
  REMOVE_CATEGORY_URL,
  ADD_PRODUCT_URL
} from "../utils/constants/api";
import toast from "react-hot-toast";

export const fetchProductAndCategory = createAsyncThunk(
  "product/fetchProductAndCategory",
  async (_,thunkAPI) => {
    try {
      const response = await BASE_URL.get(FETCH_PRODUCT_AND_CATEOGRY_URL);
      console.log(response.data);
      return {
        categories: response.data.categories,
        products: response.data.products,
      };
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async ( data : { data: any }, thunkAPI) => {
    try {
      const response = await BASE_URL.post(ADD_PRODUCT_URL, data);
      console.log(response.data.data);
      return {data: response.data.data};
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);


export const addProductCategory = createAsyncThunk(
  "product/addProductCategory",
  async ( data : { data: any }, thunkAPI) => {
    try {
      console.log(data);
      const response = await BASE_URL.post(ADD_CATEGORY_URL, data);
      console.log(response.data);
      return {
        id: response.data.data.id,
        category: response.data.data.category,
        totalProducts: response.data.data.totalProducts,
      };
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

export const removeProductCategory = createAsyncThunk(
  "product/removeProductCategory",
  async ({ data }: { data: any }, thunkAPI) => {
    try {
      const response = await BASE_URL.post(REMOVE_CATEGORY_URL, data);
      console.log(response.data);
      return { removeId: data };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

const productSlice = createSlice({
  name: "product",
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
        toast(action.payload as string);
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
      })
      .addCase(fetchProductAndCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductAndCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { categories, products } = action.payload;
        console.log(categories)
        state.categories = categories;
        state.products = products;
      })
      .addCase(fetchProductAndCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const {} = action.payload.data
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
