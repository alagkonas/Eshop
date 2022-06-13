import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserInitialStateTypes, FormDataTypes } from '../../@types';
import userService from './userService';

const initialState: UserInitialStateTypes = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const register = createAsyncThunk(
  'user/register',
  async (userData: FormDataTypes, thunkAPI) => {
    try {
      return await userService.registerUser(userData);
    } catch (error: any) {
      const message: string = error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      });
  },
});

export default userSlice.reducer;
