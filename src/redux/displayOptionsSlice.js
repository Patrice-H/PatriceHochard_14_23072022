import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: null,
  orderBy: null,
  tableLength: 10,
  pageNumber: 1,
  searchFilter: '',
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
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
});

export const {
  setSortBy,
  setOrderBy,
  setTableLength,
  setPageNumber,
  setSearchFilter,
} = displayOptionsSlice.actions;

export default displayOptionsSlice.reducer;
