import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  char: {},
  error: null,
  loading: false
}

export const charData = (state) => state.charCardSlice.char;
export const charLoading = (state) => state.charCardSlice.loading;

export const charCardSlice = createSlice({
  name: 'charCardSlice',
  initialState,
  reducers: {    
    logError: (state) => {
      state.error = true;
    },

    fetchCharRequest: (state) => {
      state.loading = true;
    },
    
    fetchCharSuccess: (state, action) => {
      state.char = action.payload;
      state.loading = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  logError,
  fetchCharRequest, 
  fetchCharSuccess, 
} = charCardSlice.actions

export default charCardSlice.reducer