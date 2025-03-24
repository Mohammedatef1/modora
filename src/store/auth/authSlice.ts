import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actRegister from "./actions/actRegister";
import actLogin from "./actions/actLogin";
import actLogout from "./actions/actLogout";

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
    builder.addCase(actRegister.fulfilled , (state, action) => {
      state.loading = "fulfilled";
      state.error = null;
      state.accessToken = action.payload.session?.access_token ?? null;
      state.user = {
        email: action.payload.user?.user_metadata.email as string,
        id: action.payload.user?.id as string,
        firstName: action.payload.user?.user_metadata.firstName as string,
        lastName: action.payload.user?.user_metadata.lastName as string
      }
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
      state.accessToken = action.payload.session.access_token;
      state.user = {
        email: action.payload.user?.user_metadata.email,
        id: action.payload.user?.id,
        firstName: action.payload.user?.user_metadata.firstName,
        lastName: action.payload.user?.user_metadata.lastName
      }
    })
    builder.addCase(actLogin.rejected , (state, action) => {
      state.loading = "rejected"
      if (action.payload && typeof action.payload === 'string'){
        state.error = action.payload
      }
    })
    builder.addCase(actLogout.pending , (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actLogout.fulfilled , (state) => {
      state.loading = "fulfilled";
      state.error = null;
      state.accessToken = null;
      state.user = null
    })
    builder.addCase(actLogout.rejected , (state, action) => {
      state.loading = "rejected"
      if (action.payload && typeof action.payload === 'string'){
        state.error = action.payload
      }
    })
  }
})

export const {cleanUpAuth} = registerSlice.actions
export default registerSlice.reducer;