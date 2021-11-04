import { createSlice } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload]
      return state
    }
  }
})

export const { setProducts } = productListSlice.actions

// Action creators are generated for each case reducer function
export default productListSlice.reducer
