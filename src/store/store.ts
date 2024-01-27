import {configureStore} from '@reduxjs/toolkit';
import expensesReducer from './expensesReducer';

export const store = configureStore({
  reducer: {total: expensesReducer},
});
export type RootState = ReturnType<typeof store.getState>;
