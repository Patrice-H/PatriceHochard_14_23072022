import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import employeesReducer from './employeesSlice';
import displayOptionsReducer from './displayOptionsSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
};

const appReducers = combineReducers({
  employees: employeesReducer,
  displayOptions: displayOptionsReducer,
});

const _persistedReducer = persistReducer(persistConfig, appReducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
