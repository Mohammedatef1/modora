import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axios from "axios";

const actGetFullProductsData =  createAsyncThunk('cart/actGetFullProductsData' ,async (_ , thunkAPI) => {
  const {rejectWithValue , getState} = thunkAPI;
  try {
    const {cart} = getState() as RootState;
    const {items} = cart;
    const ids = Object.keys(items)
    const response = await axios.get('http://localhost:5005/products');
    const products : TProduct[] = response.data.filter((el : TProduct) => ids.includes(`${el.id}`))
    products.forEach(product => {
      product.quantity = items[product.id]
    })
    return products
  } catch (error) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.message)
    }else{
      return rejectWithValue("An unexpected error")
    }
  }
})

export default actGetFullProductsData