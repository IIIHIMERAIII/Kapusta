import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global/transaction',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const getStatistics = createAsyncThunk(
  'stats/getStatistics',
  async ({ token, period }, thunkAPI) => {
    try {
      setToken(token);
      const { data } = await instance.get(`/period-data?date=${period}`);

      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue('Not founded!');
    }
  }
);