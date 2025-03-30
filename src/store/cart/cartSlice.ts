import { TProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actGetFullProductsData from "./actions/actGetFullProductsData";

interface ICart {
  items: {[key: string]: number};
  products: TProduct[];
  loading: TLoading;
  error: string | null
}

const initialState:ICart = {
  items: {},
  products: [],
  loading: "idle",
  error: null
}

const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action)=>{
      const id = action.payload
      if (state.items[id]){
        state.items[id]++
      }else{
        state.items[id] = 1
      }
    },
    changeQuantity: (state, action) => {
      const {id} = action.payload
      const {value : quantity} = action.payload
      state.items[id] = quantity;
      state.products.filter(el => el.id === id)[0].quantity = quantity
    },
    removeFromCart : (state, action) =>{
      delete state.items[action.payload]
      state.products =  state.products.filter((el) => el.id != action.payload)
    },
    cleanUpCartProducts: (state) => {
      state.products = []
    },
    clearAllCartData: (state) => {
      state.error=null;
      state.loading = "idle";
      state.items = {};
      state.products = []
    }
  },
  extraReducers: (builder) =>{
    builder.addCase(actGetFullProductsData.pending , (state) =>{
      state.loading = 'pending';
      state.error = null
    })
    builder.addCase(actGetFullProductsData.fulfilled , (state, action) =>{
      state.loading = 'fulfilled';
      state.products = action.payload
      state.error = null;
    })
    builder.addCase(actGetFullProductsData.rejected , (state, action) =>{
      state.loading = 'rejected';
      if(action.payload && typeof action.payload === 'string'){
        state.error = action.payload
      }
    })
  }
})

export const {addToCart, changeQuantity, removeFromCart, cleanUpCartProducts, clearAllCartData} = cartsSlice.actions
export default cartsSlice.reducer