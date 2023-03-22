import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const signUpUser = createAsyncThunk('api/register', async (body, { rejectWithValue }) => {
  try {
    const { name, email, password } = body
    const { data } = await axios.post('https://reqres.in/api/register', {
      email,
      password
    })
    const user = {
      name,
      email,
      data: data
    }

    return user
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const loginUser = createAsyncThunk('api/login', async (body, { rejectWithValue }) => {
  try {
    const { email, password } = body
    const { data } = await axios.post('https://reqres.in/api/login', {
      email,
      password
    })
    const user = {
      email,
      data: data
    }

    return user
  } catch (error) {
    return rejectWithValue(error.message)
  }
})



export const userList = createAsyncThunk('api/users', async (pageNumber, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`)
    return data.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})