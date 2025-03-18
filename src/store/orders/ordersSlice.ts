import { TOrderItem } from "@customTypes/orders";
import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actPlaceOrder from "./actions/actPlaceOrder";

interface IOrdersSlice {
  orders: TOrderItem[];
  loading: TLoading;
  error: null | string
}

const initialState: IOrdersSlice = {
  error: null,
  loading: "idle",
  orders: []
}

const ordersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    cleanUpOrders: (state) => {
      state.error = null;
      state.loading = "idle"
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.error = null;
      state.loading= "pending"
    })
    builder.addCase(actPlaceOrder.fulfilled, (state, action) => {
      state.loading ="fulfilled";
      state.error = null;
      state.orders = action.payload
    })
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload
      }
    })
  }
})

export const {cleanUpOrders} = ordersSlice.actions
export default ordersSlice.reducer
