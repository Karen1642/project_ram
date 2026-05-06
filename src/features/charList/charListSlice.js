import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  charList: [],
  error: null,
  loading: false
}

export const charListSelector = (state) => state.charListSlice.charList;
export const charListLoadingSelector = (state) => state.charListSlice.loading;

export const charListSlice = createSlice({
  name: 'charListSlice',
  initialState,
  reducers: {
    fetchCharsError: (state) => {
      state.error = true;
    },

    fetchCharsRequest: (state) => {
      state.loading = true;
    },

    fetchCharsSuccess: (state, action) => {
      state.charList = action.payload;
      state.loading = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  fetchCharsRequest, 
  fetchCharsSuccess, 
  fetchCharsError
} = charListSlice.actions

export default charListSlice.reducer