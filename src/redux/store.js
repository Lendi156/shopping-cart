import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer, persistStore
} from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import productListSlice from './reducers/productListSlice'
import cartItemListSlice from './reducers/cartItemListSlice'

const persistConfig = {
  key: 'root',
  storage
}

const reducers = combineReducers({
  products: persistReducer(persistConfig, productListSlice),
  cartItems: persistReducer(persistConfig, cartItemListSlice)
})

const store = configureStore({
  reducer: reducers
})

const persistor = persistStore(store)

export { store, persistor }
