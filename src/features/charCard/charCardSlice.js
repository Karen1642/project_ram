import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  char: {},
  error: null,
  loading: false
}

export const charCardSlice = createSlice({
  name: 'charCardSlice',
  initialState,
  reducers: {    
    logError: (state) => {
      state.error = true;
    },

    fetchCharRequest: () => {
      //state.loading = true;
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