import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';
import { API_TRANSACTION } from 'api/apiTransactionCategories';

export const addTransactionOp = createAsyncThunk(
  'transactions/ADD',

  async ({ type, transaction }, thunkAPI) => {
    try {
      const { data } = await instance.post(
        API_TRANSACTION[type].apiAddTransactionEndpoint,
        transaction
      );
      return { type, data };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const fetchUserBalance = createAsyncThunk(
  'auth/balance',
  async ({ value, token }, { rejectWithValue }) => {
    try {
      if (value !== 0) {
        const { data } = await instance.patch('/user/balance', {
          newBalance: value,
        });
        return data;
      }
      
      if(value!==0){
        const { data } = await baseInstance.patch('/user/balance', {
        newBalance: value,
      });
      return data;
    }
      
export const fetchExpenseTransactions = createAsyncThunk(
  'transactions/getExpense',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('transaction/expense');
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const fetchIncomeTransactions = createAsyncThunk(
  'transactions/getIncome',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('transaction/income');
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'transactions/remove',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`transaction/${id}`);
      return { id, data };
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);