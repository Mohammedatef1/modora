import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "src/db/supabase";

const actLogout = createAsyncThunk("auth/actLogout",async (_, thunkAPI) =>{
  const {rejectWithValue} = thunkAPI
  
  const {error} = await supabase.auth.signOut()
  console.log( error)

  if(error) return rejectWithValue(error.message)
  
  return true
})

export default actLogout