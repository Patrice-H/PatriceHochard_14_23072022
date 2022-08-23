import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import { employeesList } from '../data/dataTest';

const state = {
  employees: {
    list: employeesList,
  },
  displayOptions: {
    sortBy: '',
    orderBy: '',
    tableLength: 2,
    pageNumber: 1,
    searchFilter: '',
  },
};

/* istanbul ignore next */
const employeesSlice = createSlice({
  name: 'employees',
  initialState: state.employees,
  reducers: {
    addEmployee: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

/* istanbul ignore next */
const displayOptionsSlice = createSlice({
  name: 'display-options',
  initialState: state.displayOptions,
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

const appReducers = combineReducers({
  employees: employeesSlice.reducer,
  displayOptions: displayOptionsSlice.reducer,
});

// Mocked store for testing
export const mockedStore = configureStore({
  reducer: appReducers,
});

// Mocked selector for testing
export const mockedAppSelector = (f) => f(state);
