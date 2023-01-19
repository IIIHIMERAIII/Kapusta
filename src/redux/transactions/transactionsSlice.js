import { createSlice } from '@reduxjs/toolkit';
import { addTransactionOp,fetchUserBalance } from './transactionsOps';

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
      }).addCase(fetchUserBalance.pending, (state) => {
        state.isLoadinng = true;
        state.error = null;
      }).addCase(fetchUserBalance.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoadinng = false;
        
        (payload && (state.balance = payload.newBalance))
      }).addCase(fetchUserBalance.rejected, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = payload;
      }),
});

export default transactionsSlice.reducer;
