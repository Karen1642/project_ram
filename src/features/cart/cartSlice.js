import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  error: null,
  loading: false
}

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
    },

    logError: (state) => {
      state.error = true;
    }
  },
})


export const { 
  addToCart,
  removeFromCart, 
  clearCart, 
  logError
} = cartSlice.actions

export default cartSlice.reducer