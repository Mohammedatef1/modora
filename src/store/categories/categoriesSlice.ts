import { createSlice } from "@reduxjs/toolkit";
import { TCategories } from "src/customTypes/category";
import { TLoading } from "src/customTypes/shared";
import actGetCategories from "./actions/getAllCategories";

interface CategoriesProps{
  records : TCategories[],
  loading: TLoading,
  error: string | null
}

const initialState : CategoriesProps = {
  records: [],
  loading : "idle",
  error: null
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers : {
    cleanUpCategories : (state) => {
      state.records = []
    }
  },
  extraReducers : (builder)=>{
    builder.addCase(actGetCategories.pending , (state)=>{
      state.loading = 'pending';
      state.error = null
    });
    builder.addCase(actGetCategories.fulfilled, (state , action)=>{
      state.loading = 'fulfilled';
      state.records = Array.isArray(action.payload) ? action.payload : [action.payload]  
    })
    builder.addCase(actGetCategories.rejected, (state, action)=>{
      state.loading = "rejected";
      if(action.payload && typeof action.payload == "string" ){
        state.error = action.payload
      }
    })
  }
})

export const {cleanUpCategories} = categoriesSlice.actions
export default categoriesSlice.reducer