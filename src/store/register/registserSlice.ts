import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actRegister from "./actions/actRegister";

interface IRegisterSlice {
  loading: TLoading;
  error: string | null;
}

const initialState: IRegisterSlice = {
  error: null,
  loading: "idle"
}

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actRegister.pending , (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actRegister.fulfilled , (state) => {
      state.loading = "fulfilled";
      state.error = null;
    })
    builder.addCase(actRegister.pending , (state, action) => {
      state.loading = "rejected"
      if (action.payload && typeof action.payload === 'string'){
        state.error = action.payload
      }
    })
  }
})

export default registerSlice.reducer;