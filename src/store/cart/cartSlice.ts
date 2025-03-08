import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import actGetFullProductsData from "./actions/actGetFullProductsData";
import { TLoading } from "@customTypes/shared";

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
      const {value} = action.payload
      state.items[id] = value;
    },
    removeFromCart : (state, action) =>{
      delete state.items[action.payload]
      state.products =  state.products.filter((el) => el.id != action.payload)
    }
  },
  extraReducers: (builder) =>{
    builder.addCase(actGetFullProductsData.pending , (state) =>{
      state.loading = 'pending';
      state.error = null
    })
    builder.addCase(actGetFullProductsData.fulfilled , (state, action) =>{
      state.loading = 'succeeded';
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

export const {addToCart, changeQuantity, removeFromCart} = cartsSlice.actions
export default cartsSlice.reducer