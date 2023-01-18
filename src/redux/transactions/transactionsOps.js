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
      const { data } = await axios.post(
        API_TRANSACTION[type].apiAddTransactionEndpoint,
        transaction
      );
      console.dir(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);
