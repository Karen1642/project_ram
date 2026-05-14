import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  loading: false
}

export const cartIds = (state) => state.cartSlice.cart;
export const cartLoading = (state) => state.cartSlice.loading;

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      action.payload.map((idx) => (
         state.cart = state.cart.filter(item => item.id !== idx)
        ));      
      console.log("cart state", state.cart);
    },
    clearCart: (state) => {
        state.cart = [];
        console.log("cart state", state.cart);
    }
  },
})


export const { 
  addToCart,
  removeFromCart, 
  clearCart
} = cartSlice.actions

export default cartSlice.reducer