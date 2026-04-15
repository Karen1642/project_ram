import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  chars: [],
  error: null
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("cart state", state.cart);
      state.cart.push(action.payload);
      console.log("cart new state", state.cart);
    },
    checkout: (state, action) => {
      state.cart = [];
      console.log("cart state", state.cart);

    },     
    clearCart: (state) => {
        state.cart = [];
        console.log("cart state", state.cart);
    },


    fetchCharsRequest: () => {
    },

    fetchCharsSuccess: (state, action) => {
      state.chars = action.payload;
    },

    fetchCharsError: (state) => {
      state.error = true;
    }

  },
})

// Action creators are generated for each case reducer function
export const { 
  addToCart, 
  clearCart, 
  fetchCharsRequest, 
  fetchCharsSuccess, 
  fetchCharsError 
} = counterSlice.actions

export default counterSlice.reducer