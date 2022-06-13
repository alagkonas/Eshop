import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  UserInitialStateTypes,
  FormDataTypes,
  SignInFormDataTypes,
} from '../../@types';
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

export const login = createAsyncThunk(
  'user/login',
  async (userData: SignInFormDataTypes, thunkAPI) => {
    try {
      return await userService.loginUser(userData);
    } catch (error: any) {
      const message: string = error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const googleAuth = createAsyncThunk(
  'user/googleAuth',
  async (_, thunkAPI) => {
    try {
      return await userService.googleAuth();
    } catch (error: any) {
      const message: string = error.message.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
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
        state.isLoading = false;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(googleAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(googleAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(googleAuth.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.user = null;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
