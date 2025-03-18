import { TOrderItem } from "@customTypes/orders"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "@store/store"
import axios from "axios"
import axiosErrorHandler from "src/utils/axiosErrorHandler"

type TResponse = TOrderItem[]

const actGetUserOrders = createAsyncThunk("orders/actGetUserOrders" , async (_, thunkAPI) => {
  const {rejectWithValue, getState} = thunkAPI
  const {auth} = getState() as RootState

  try {
    const response = await axios.get<TResponse>(`/orders?userId=${auth.user?.id}`)

    return response.data
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actGetUserOrders 