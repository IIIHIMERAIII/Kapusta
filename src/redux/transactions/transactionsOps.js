import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_TRANSACTION } from 'components/InputTransactionForm/api/apiTransactions';

const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global/transaction',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const addTransactionOp = createAsyncThunk(
  'transactions/ADD',

  async ({ token, type, transaction }, thunkAPI) => {
    try {
      setToken(token);
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

export const fetchExpenseTransactions = createAsyncThunk(
  'transactions/getExpense',
  async (_, { rejectWithValue, getState }) => {
    const accessToken = getState().auth.accessToken;
    try {
      setToken(accessToken);
      const { data } = await instance.get('/expense');
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
  async (_, { rejectWithValue, getState }) => {
    const accessToken = getState().auth.accessToken;
    try {
      setToken(accessToken);
      const { data } = await instance.get('/income');
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
