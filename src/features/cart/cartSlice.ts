import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CartInitialStateTypes, ProductTypes } from '../../@types';

const initialState: CartInitialStateTypes = {
  products: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: '',
};

export const addProduct = createAsyncThunk(
  'cart/add',
  (product: ProductTypes, thunkAPI) => {
    try {
      return product;
    } catch (error: any) {
      const message: string = error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        //@ts-ignore
        state.products = [...state.products, action.payload];
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
