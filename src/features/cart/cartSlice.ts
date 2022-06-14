import { createSlice } from '@reduxjs/toolkit';
import { CartInitialStateTypes } from '../../@types';

const initialState: CartInitialStateTypes = {
  products: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: '',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default cartSlice.reducer;
