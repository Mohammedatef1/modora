import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  items: {[key: number]: number};
  products: TProduct[];
}

const initialState:ICart = {
  items: {},
  products: []
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
    }
  }
})

export const {addToCart} = cartsSlice.actions
export default cartsSlice.reducer