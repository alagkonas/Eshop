import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserInitialStateTypes } from '../../@types';

const initialState: UserInitialStateTypes = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
