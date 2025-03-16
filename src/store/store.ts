import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from '@store/cart/cartSlice';
import categoriesSlice from '@store/categories/categoriesSlice';
import productsSlice from '@store/products/productsSlice';
import registerSlice from "@store/register/registerSlice";
import WishlistSlice from '@store/wishlist/wishlistSlice';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items']
}

const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
  whitelist: ['productsIds']
}

const rootReducer = combineReducers({
  register: registerSlice,
  categories : categoriesSlice,
  products: productsSlice,
  wishlist: persistReducer(wishlistPersistConfig, WishlistSlice),
  cart: persistReducer(cartPersistConfig, cartSlice)
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleWare => getDefaultMiddleWare({
    serializableCheck: {
      ignoredActions: [PERSIST, PAUSE, PURGE, FLUSH, REGISTER, REHYDRATE] 
    }
  })
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch