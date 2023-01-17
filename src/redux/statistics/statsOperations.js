import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getToken } from 'redux/auth/authSelectors';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const getTransaction = createAsyncThunk(
  'stats/getTransaction',
  async (period, thunkAPI) => {
    try {
      const response = await axios.get('/transaction/period-data', period);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Not founded!');
    }
  }
);
