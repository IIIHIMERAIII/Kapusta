import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from 'redux/auth/authSelectors';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`

export const getTransaction = createAsyncThunk(
  'stats/getTransaction',
  async (period, thunkAPI) => {
    try {
      const response = await axios.get(`/transaction/period-data?date=${period}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Not founded!');
    }
  }
);
