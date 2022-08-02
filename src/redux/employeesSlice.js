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
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addEmployee, setList } = employeesSlice.actions;

export default employeesSlice.reducer;
