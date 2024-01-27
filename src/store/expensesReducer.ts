import {createSlice} from '@reduxjs/toolkit';

export const total = createSlice({
  name: 'total',
  initialState: {
    total: 0,
  },
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload.total;
    },
  },
});

export const {setTotal} = total.actions;

export default total.reducer;
