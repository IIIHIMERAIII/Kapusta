import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';

const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.Authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const sid = localStorage.getItem('sid');
      try {
        const { data } = await instance.post('/auth/refresh', { sid });
        setToken(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/fetchCurrentUser',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const token = state.auth.token;
//     console.log(token);
//     if (!token) {
//       return thunkAPI.rejectWithValue();
//     }
//     try {
//       const { data } = await instance.get(`/user`, token);
//       console.log(data);
//       return data;
//     } catch (error) {
//       Notiflix.Notify.failure(`${error.message}`, notifySettings);
//       return thunkAPI.rejectWithValue(error.request.status);
//     }
//   }
// );

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post('/auth/register', userData);
      console.log(data);
      return data;
    } catch (error) {
      if (error.request.status === 409) {
        Notiflix.Notify.warning(
          `User with this email already exists`,
          notifySettings
        );
        return thunkAPI.rejectWithValue(error.request.status);
      }
      Notiflix.Notify.failure(`${error.message}`, notifySettings);
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post('/auth/login', userData);
      setToken(data.accessToken);
      console.log(data);
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`${error.message}`, notifySettings);
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await instance.post(`/auth/logout`);
      setToken(null);
    } catch (error) {
      // console.log(error);
      Notiflix.Notify.failure(`${error.message}`, notifySettings);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default instance;
