import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axios from "axios";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

const actLikeToggle = createAsyncThunk('wishlist/actLikeToggle' , async(id:number , thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const { auth } = getState() as RootState;
  try {
    const isRecordExist = await axios.get(`/wishlist?userId=${auth.user?.id}&&productId=${id}`)
    if(isRecordExist.data.length > 0){
      axios.delete(`/wishlist/${isRecordExist.data[0].id}`)
      return {type: 'delete' , productId : id}
    }else{
      axios.post('/wishlist', {userId : auth.user?.id , productId : id} )
      return {type: 'add' , productId : id}
    }
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actLikeToggle