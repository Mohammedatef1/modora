import { TProduct } from "@customTypes/product"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "@store/store"
import { supabase } from "src/db/supabase"
import axiosErrorHandler from "src/utils/axiosErrorHandler"

const actGetUserOrders = createAsyncThunk("orders/actGetUserOrders" , async (_, thunkAPI) => {
  const {rejectWithValue, getState} = thunkAPI
  const {auth} = getState() as RootState

  try {
    const {data, error} = await supabase.from('orders').select().eq('userId', auth.user?.id)

    if (error) return rejectWithValue(error.message)

    const userOrders = data.map(data => ({
        userId: data.userId as string,
        orderList: data.orderList as TProduct[],
        subtotal: data.subtotal as number,
        id: data.id as number
    }))

    return userOrders
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actGetUserOrders 