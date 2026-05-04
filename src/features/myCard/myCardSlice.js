import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  my_cards_ids: [
    {
      id: 2,
    }
  ],
  my_cards: [],
  error: null,
  loading: false
}

export const myCardSlice = createSlice({
  name: 'myCardSlice',
  initialState,
  reducers: {
    addToMyCards: (state, action) => {
      action.payload.map((idx) => (
          state.my_cards_ids.push({"id": idx})       
        ));      
    },  

    getCharsRequest: () => {
    },

    getCharsSuccess: (state, action) => {
      state.my_cards = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  addToMyCards, 
  getCharsRequest, 
  getCharsSuccess, 
  getCharsError
} = myCardSlice.actions

export default myCardSlice.reducer