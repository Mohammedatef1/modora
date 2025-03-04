import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from '@store/categories/categoriesSlice'
import productsSlice from '@store/products/productsSlice'
import cartSlice from '@store/cart/cartSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist"

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items']
}

const rootReducer = combineReducers({
  categories : categoriesSlice,
  products: productsSlice,
  cart: persistReducer(cartPersistConfig, cartSlice)
})

export const store = configureStore({
  reducer: rootReducer
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch