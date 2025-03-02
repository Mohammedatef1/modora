import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from '@store/categories/categoriesSlice'
import productsSlice from '@store/products/productsSlice'

export const store = configureStore({
  reducer: {
    categories : categoriesSlice,
    Products: productsSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch