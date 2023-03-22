import { createSlice, } from '@reduxjs/toolkit'
import { userList } from './actions'



const initialState = {

  data: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: ""
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userList.pending, (state) => {
        state.isFetching = true
      })
      .addCase(userList.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.data = payload;


      })
      .addCase(userList.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = false;
        state.data = [];
        state.errorMessage = "Something went wrong"

      })
  }
})

export const userSelector = state => state.users

