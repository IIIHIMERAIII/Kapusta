import { createSlice } from '@reduxjs/toolkit';
import { addTransactionOp } from './transactionsOps';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    balance: 0,
    transactions: {
      expense: [],
      income: [],
    },
    isLoadinng: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(addTransactionOp.pending, state => {
        state.isLoadinng = true;
        state.error = null;
      })
      .addCase(addTransactionOp.fulfilled, (state, { payload }) => {
        state.isLoadinng = false;
        state.balance = payload.data.newBalance;
        const newTransaction = payload.data.transaction;
        state.transactions[payload.type].push(newTransaction);
      })
      .addCase(addTransactionOp.rejected, (state, { payload }) => {
        state.error = payload;
      }),
});

export default transactionsSlice.reducer;
