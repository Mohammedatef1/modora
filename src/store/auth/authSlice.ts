import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actRegister from "./actions/actRegister";
import actLogin from "./actions/actLogin";

interface IAuthSlice {
  loading: TLoading;
  error: string | null;
  user: null | {id: number, email: string, firstName: string, lastName: string};
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
  reducers: {
    cleanUpAuth: (state)=> {
      state.loading="idle";
      state.error= null;
    }
  },
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
    builder.addCase(actLogin.pending , (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actLogin.fulfilled , (state, action) => {
      state.loading = "fulfilled";
      state.error = null;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    })
    builder.addCase(actLogin.rejected , (state, action) => {
      state.loading = "rejected"
      if (action.payload && typeof action.payload === 'string'){
        state.error = action.payload
      }
    })
  }
})

export const {cleanUpAuth} = registerSlice.actions
export default registerSlice.reducer;