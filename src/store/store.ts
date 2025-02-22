import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from '@store/categories/categoriesSlice'

export const store = configureStore({
  reducer: {
    Categories : categoriesSlice
  }
})
