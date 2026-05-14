import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  charList: [],
  loading: false
}

export const charListSelector = (state) => state.charListSlice.charList;
export const charListLoadingSelector = (state) => state.charListSlice.loading;

export const charListSlice = createSlice({
  name: 'charListSlice',
  initialState,
  reducers: {
    fetchCharsRequest: (state) => {
      state.loading = true;
    },
    fetchCharsSuccess: (state, action) => {
      state.charList = action.payload;
      state.loading = false;
    },
    fetchCharsError: (state) => {
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