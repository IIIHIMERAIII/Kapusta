import { createSlice } from '@reduxjs/toolkit';
import { addTransactionOp } from './transactionsOps';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    balance: 0,
    transactions: [],
    isLoadinng: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(addTransactionOp.pending, state => {
        state.transactions.isLoadinng = true;
        state.transactions.error = null;
      })
      .addCase(addTransactionOp.fulfilled, (state, { payload }) => {
        // state.transactions.isLoading = false;
        // state.transactions.error = null;
        console.log('Im addTransactionSlice');
      })
      .addCase(addTransactionOp.rejected, (state, { payload }) => {
        state.transactions.isLoading = false;
        console.log(payload);
      }),
});

export default transactionsSlice.reducer;
