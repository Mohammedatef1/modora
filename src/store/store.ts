import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from '@store/cart/cartSlice';
import categoriesSlice from '@store/categories/categoriesSlice';
import productsSlice from '@store/products/productsSlice';
import authSlice from "@store/auth/authSlice";
import WishlistSlice from '@store/wishlist/wishlistSlice';
import ordersSlice from '@store/orders/ordersSlice'
import tabsSlice from '@store/tabs/tabsSlice'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items']
}

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist : ["accessToken", "user"]
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  categories : categoriesSlice,
  products: productsSlice,
  wishlist: WishlistSlice,
  cart: persistReducer(cartPersistConfig, cartSlice),
  orders: ordersSlice,
  tabs: tabsSlice
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