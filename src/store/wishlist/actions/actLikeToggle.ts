import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { supabase } from "src/db/supabase";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

const actLikeToggle = createAsyncThunk('wishlist/actLikeToggle' , async(id:number , thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const { auth } = getState() as RootState;

  
  try {
    const {data, error} = await supabase.from('wishlist').select().eq('userId', auth.user?.id ).eq('productId', id)
    
    if(error) return rejectWithValue(error.message);

    const isRecordExist = data.length > 0

    if(isRecordExist){
      const { error } = await supabase.from('wishlist').delete().eq('id' , data[0].id)

      if(error) return rejectWithValue(error.message);

      return {type: 'delete' , productId : id}
    }else{
      const {error} = await supabase.from('wishlist').insert([{userId : auth.user?.id , productId : id}])

      if(error) return rejectWithValue(error.message);

      return {type: 'add' , productId : id}
    }
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actLikeToggle