import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    createFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const { createFilter } = filterSlice.actions;
