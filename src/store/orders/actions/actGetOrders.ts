import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "@store/store"
import axios from "axios"
import axiosErrorHandler from "src/utils/axiosErrorHandler"

const actGetOrders = createAsyncThunk("orders/actGetOrders" , async (_, thunkAPI) => {
  const {rejectWithValue, getState} = thunkAPI
  const {auth} = getState() as RootState
  
  try {
    const response = await axios.get(`/orders?userId=${auth.user?.id}`)

    return response.data
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actGetOrders 