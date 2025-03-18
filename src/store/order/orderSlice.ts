import { TOrder } from "@customTypes/order";
import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";

interface IOrder {
  orders: TOrder[];
  loading: TLoading;
  error: null | string
}

const initialState: IOrder = {
  error: null,
  loading: "idle",
  orders: []
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {}
})

export default orderSlice.reducer
