import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
