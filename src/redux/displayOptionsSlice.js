import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: 'first-name',
  orderBy: 'ascending',
};

export const displayOptionsSlice = createSlice({
  name: 'display-options',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
  },
});

export const { setSortBy, setOrderBy } = displayOptionsSlice.actions;

export default displayOptionsSlice.reducer;
