import { createSlice } from '@reduxjs/toolkit';

let employees;

if (localStorage.getItem('employees') === null) {
  employees = [];
} else {
  employees = JSON.parse(localStorage.getItem('employees'));
}

const initialState = {
  list: employees,
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
