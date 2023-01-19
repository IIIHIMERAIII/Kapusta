import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Balance } from 'components/Balance/Balance';
import { API_TRANSACTION } from 'components/InputTransactionForm/api/apiTransactions';

const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global/transaction',
});

const baseInstance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global',
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



export const fetchUserBalance = createAsyncThunk(
  'auth/balance',
  async ({value, token}, { rejectWithValue }) => {
    try {
      if (token) {
        baseInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      }else{
        baseInstance.defaults.headers.common.authorization = '';
      }
      
      if(value!==0){const { data } = await baseInstance.patch('/user/balance', {
        newBalance: value,
      });
      return data;}
      
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