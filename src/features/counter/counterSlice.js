import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  chars: [],
  char: {},
  my_cards_ids: [
    {
      id: 2,
    }
  ],
  my_cards: [],
  error: null,
  loading: false
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
      action.payload.map((idx) => (
          state.my_cards_ids.push({"id": idx}),       
          state.cart = state.cart.filter(item => item.id !== idx)
        ));      
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
    },

    fetchCharRequest: () => {
    },
    fetchCharSuccess: (state, action) => {
      state.char = action.payload;
    },
    fetchCharError: (state) => {
      state.error = true;
    },

    getCharsRequest: () => {
    },
    getCharsSuccess: (state, action) => {
      state.my_cards = action.payload;
    },
    getCharsError: (state) => {
      state.error = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  addToCart,
  checkout, 
  clearCart, 
  fetchCharsRequest, 
  fetchCharsSuccess, 
  fetchCharsError,
  fetchCharRequest, 
  fetchCharSuccess, 
  fetchCharError,
  getCharsRequest, 
  getCharsSuccess, 
  getCharsError
} = counterSlice.actions

export default counterSlice.reducer