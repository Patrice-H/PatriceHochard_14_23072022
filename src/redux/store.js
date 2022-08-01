import { configureStore, combineReducers } from '@reduxjs/toolkit';
import employeesReducer from './employeesSlice';
import displayOptionsReducer from './displayOptionsSlice';

const appReducers = combineReducers({
  employees: employeesReducer,
  displayOptions: displayOptionsReducer,
});

export const store = configureStore({
  reducer: appReducers,
});
