import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  my_cards_ids: [
    {
      id: 2,
    }
  ],
  my_cards: null,
  loading: false
}

export const myCardsIdsSelector = (state) => state.myCardSlice.my_cards_ids;
export const myCardsSelector = (state) => state.myCardSlice.my_cards;
export const myCardsLoadingSelector = (state) => state.myCardSlice.loading;

export const myCardSlice = createSlice({
  name: 'myCardSlice',
  initialState,
  reducers: {
    addToMyCards: (state, action) => {
      action.payload.map((idx) => (
          state.my_cards_ids.push({"id": idx})       
        ));      
    },
    getCharsRequest: (state) => {
      state.loading = true;
    },
    getCharsSuccess: (state, action) => {
      state.my_cards = action.payload;
      state.loading = false;
    }
  },
})

//Action creators are generated for each case reducer function
export const {
  addToMyCards, 
  getCharsRequest,
  getCharsSuccess
} = myCardSlice.actions

export default myCardSlice.reducer