import { createSlice } from '@reduxjs/toolkit'

export const cartItemListSlice = createSlice({
  name: 'cartItems',
  initialState: { cartItems: [] },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = [...action.payload]
      return state
    }
  }
})

export const { setCartItems } = cartItemListSlice.actions

// Action creators are generated for each case reducer function
export default cartItemListSlice.reducer
