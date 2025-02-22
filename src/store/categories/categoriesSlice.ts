import { createSlice } from "@reduxjs/toolkit";

interface CategoriesProps{
  records : {
    id: number,
    name: string,
    prefix: string,
    img: string
  }[],
  loading: 'idle'| 'succeeded' | 'pending' | 'rejected',
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
  reducers : {}
})

export default categoriesSlice.reducer