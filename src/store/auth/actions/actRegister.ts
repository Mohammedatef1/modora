import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "src/db/supabase";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

type TUserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string
}

const actRegister = createAsyncThunk('register/actRegister' , async (userData : TUserData, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
      const {data, error} = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            firstName: userData.firstName,
            lastName: userData.lastName
          }
        }
      });
      
      if(error) return rejectWithValue(error.message);
      
      console.log(data)
      return data
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actRegister