import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { API_TRANSACTION } from 'components/InputTransactionForm/api/apiTransactions';
import { instance } from 'redux/auth/authOperations';

// const instance = axios.create({
//   baseURL: 'https://kapusta-backend.goit.global/transaction',
// });

// const setToken = token => {
//   if (token) {
//     return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
//   }
//   instance.defaults.headers.common.authorization = '';
// };

export const addTransactionOp = createAsyncThunk(
  'transactions/ADD',

  async ({ type, transaction }, thunkAPI) => {
    try {
      // setToken(token);
      const { data } = await instance.post(
        `transaction/${API_TRANSACTION[type].apiAddTransactionEndpoint}`,
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
  async (_, { rejectWithValue }) => {
    // const accessToken = getState().auth.token;
    try {
      // setToken(accessToken);
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
    // const accessToken = getState().auth.token;
    try {
      // setToken(accessToken);
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
    // const accessToken = getState().auth.token;
    try {
      // setToken(accessToken);
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
