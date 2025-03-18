import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "@store/store";
import axios from "axios";
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
    const response = await axios.post("/orders" , {
      userId: id,
      orderList,
      subtotal: cartSubtotal
    })
    console.log(response)

    return response.data
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actPlaceOrder