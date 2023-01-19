import { createSlice } from '@reduxjs/toolkit';
import { addTransactionOp, fetchExpenseTransactions } from './transactionsOps';

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
        state.isLoadinng = false;
        state.error = payload;
      })
      .addCase(fetchExpenseTransactions.pending, state => {
        state.isLoadinng = true;
        state.error = null;
      })
      .addCase(fetchExpenseTransactions.fulfilled, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = null;
        console.log('payload', payload);
        state.transactions.expense = payload.expenses;
      })
      .addCase(fetchExpenseTransactions.rejected, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = payload;
      }),
});

export default transactionsSlice.reducer;
