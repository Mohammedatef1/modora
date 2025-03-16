import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actRegister from "./actions/actRegister";

interface IAuthSlice {
  loading: TLoading;
  error: string | null;
  user: null | {id: string, email: string, firstName: string, lastName: string};
  accessToken: string | null
}

const initialState: IAuthSlice = {
  error: null,
  loading: "idle",
  user: null,
  accessToken: null
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
    builder.addCase(actRegister.rejected , (state, action) => {
      state.loading = "rejected"
      if (action.payload && typeof action.payload === 'string'){
        state.error = action.payload
      }
    })
  }
})

export default registerSlice.reducer;