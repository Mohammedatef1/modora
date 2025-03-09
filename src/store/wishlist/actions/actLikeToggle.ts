import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actLikeToggle = createAsyncThunk('wishlist/actLikeToggle' , async(id:number , thunkAPI) => {
  const {rejectWithValue } = thunkAPI
  try {
    const isRecordExist = await axios.get(`/wishlist?userId=1&productId=${id}`)
    if(isRecordExist.data.length > 0){
      axios.delete(`/wishlist/${isRecordExist.data[0].id}`)
      return {type: 'delete' , productId : id}
    }else{
      axios.post('/wishlist', {userId : 1 , productId : id} )
      return {type: 'add' , productId : id}
    }
  } catch (error) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.message || error.response?.data.message)
    }else{
      return rejectWithValue("An unexpected error!")
    }
  }
})

export default actLikeToggle