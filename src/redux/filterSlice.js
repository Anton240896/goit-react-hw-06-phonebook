import { createSlice } from '@reduxjs/toolkit';

/*======== REDUX-TOOLKIT STORE =======*/
const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
