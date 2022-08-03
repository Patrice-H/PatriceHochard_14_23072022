import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: 'first-name',
  orderBy: 'ascending',
  tableLength: 10,
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
    setTableLength: (state, action) => {
      state.tableLength = action.payload;
    },
  },
});

export const { setSortBy, setOrderBy, setTableLength } =
  displayOptionsSlice.actions;

export default displayOptionsSlice.reducer;
