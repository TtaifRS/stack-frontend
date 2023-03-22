import { createSlice, } from '@reduxjs/toolkit'
import { loginUser, signUpUser } from './actions'



const initialState = {
  name: '',
  email: '',
  data: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: ""
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isFetching = true
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.name = payload.name;
        state.email = payload.email;
        state.data = payload.data;


      })
      .addCase(signUpUser.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = false;
        state.name = '';
        state.email = '';
        state.data = [];
        state.errorMessage = "Something went wrong"

      })
      .addCase(loginUser.pending, (state) => {
        state.isFetching = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.email;
        state.data = payload.data;


      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = false;
        state.name = '';
        state.email = '';
        state.data = [];
        state.errorMessage = "Something went wrong"

      })
  }
})

export const userSelector = state => state.user

