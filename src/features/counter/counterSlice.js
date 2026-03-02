import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //value: 0,
  cart: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("state", state.cart)
      state.cart.push(action.payload);
      console.log("state", state.cart)
    },
    removeFromCart: (state, action) => {
      state.cart = [];
      console.log("state", state.cart)

    },     
    clearCart: (state) => {
        state.cart = [];
        console.log("state", state.cart)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart } = counterSlice.actions

export default counterSlice.reducer