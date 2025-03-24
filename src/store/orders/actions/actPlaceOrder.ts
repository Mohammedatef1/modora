import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "@store/store";
import { supabase } from "src/db/supabase";
import { getTotalCart } from "src/utils";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

const actPlaceOrder = createAsyncThunk('orders/actPlaceOrder' , async (_, thunkAPI) => {
  const {rejectWithValue, getState} = thunkAPI;
  const {auth, cart} = getState() as RootState
  const {id} = auth.user!
  const { products } = cart
  const cartSubtotal = getTotalCart(products)
  const orderList = products.map(el => ({
      id: el.id,
      img: el.img,
      title: el.title,
      price: el.price,
      quantity: el.quantity
    }))
  try {
    const { error } = await supabase.from('orders').insert([{
      userId: id,
      orderList,
      subtotal: cartSubtotal
    }])

    if (error) console.log(error.message)

    if (error) return rejectWithValue(error.message)

    // you can return nothing cuz data is always null
    return true
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actPlaceOrder