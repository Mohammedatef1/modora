import { TOrderItem } from "@customTypes/orders";
import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";

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

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {}
})

export default orderSlice.reducer
