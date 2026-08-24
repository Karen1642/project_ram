import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  char: null,
  loading: false
}

export const charData = (state) => state.charCardSlice.char;
export const charLoading = (state) => state.charCardSlice.loading;

export const charCardSlice = createSlice({
  name: 'charCardSlice',
  initialState,
  reducers: {    
    fetchCharRequest: (state) => {
      state.loading = true;
    },    
    fetchCharSuccess: (state, action) => {
      state.char = action.payload;
      state.loading = false;
    },
    fetchCharError: (state) => {
      state.loading = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  fetchCharRequest, 
  fetchCharSuccess, 
  fetchCharError
} = charCardSlice.actions

export default charCardSlice.reducer