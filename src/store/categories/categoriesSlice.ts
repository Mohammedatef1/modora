import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./actions/getAllCategories";
import { TCategories } from "src/customTypes/category";
import { TLoading } from "src/customTypes/shared";

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
  reducers : {},
  extraReducers : (builder)=>{
    builder.addCase(actGetCategories.pending , (state)=>{
      state.loading = 'pending';
      state.error = null
    });
    builder.addCase(actGetCategories.fulfilled, (state , action)=>{
      state.loading = 'succeeded';
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

export default categoriesSlice.reducer