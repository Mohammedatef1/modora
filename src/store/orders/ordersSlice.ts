import { TOrderItem } from "@customTypes/orders";
import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actPlaceOrder from "./actions/actPlaceOrder";
import actGetUserOrders from "./actions/actGetOrders";

interface IOrdersSlice {
  userOrders: TOrderItem[];
  loading: TLoading;
  error: null | string
}

const initialState: IOrdersSlice = {
  error: null,
  loading: "idle",
  userOrders: []
}

const ordersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    cleanUpOrders: (state) => {
      state.error = null;
      state.loading = "idle";
      state.userOrders = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.error = null;
      state.loading= "pending"
    })
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading ="fulfilled";
      state.error = null;
    })
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload
      }
    })

    builder.addCase(actGetUserOrders.pending , (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actGetUserOrders.fulfilled , (state, action) => {
      state.loading = "fulfilled";
      state.userOrders = action.payload;
      state.error = null;
    })
    builder.addCase(actGetUserOrders.rejected , (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string" ){
        state.error = action.payload;
      }
    })
  }
})

export const {cleanUpOrders} = ordersSlice.actions
export default ordersSlice.reducer
