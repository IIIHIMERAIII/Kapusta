import { createSlice } from '@reduxjs/toolkit';
import { getTransaction } from './statsOperations';

const initialState = {
  transactions: null,
  isLoading: false,
  error: null,
};

const statusProgress = (state, action) => {
  state.isLoading = true;
};

const statusError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const statsSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getTransaction.pending, state => {
        statusProgress(state);
      })
      .addCase(getTransaction.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTransaction.rejected, (state, action) => {
        statusError(state, action);
      })
  },
});

export default statsSlice.reducer;