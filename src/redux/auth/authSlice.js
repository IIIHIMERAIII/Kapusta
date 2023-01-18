import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';
import {
  registerUser,
  loginUser,
  logoutUser,
  // fetchCurrentUser,
} from './authOperations';

const onPending = state => {
  state.isLoading = true;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { id: null, email: null },
    token: null,
    sid: null,
    refreshToken: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, onPending)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.user = { ...payload };
        // state.isLoggedIn = true;
        Notiflix.Notify.success(
          'Acount was successfully created',
          notifySettings
        );
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, onPending)

      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.user.email = payload.userData.email;
        state.user.id = payload.userData.id;
        state.token = payload.accessToken;
        state.isLoggedIn = true;

        Notiflix.Notify.success(
          `Welcome back, ${payload.userData.email}!`,
          notifySettings
        );
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        Notiflix.Notify.failure(
          'Something went wrong, please try again',
          notifySettings
        );
      })
      .addCase(logoutUser.pending, onPending)
      .addCase(logoutUser.fulfilled, (state, _) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.sid = null;
        state.refreshToken = null;
        state.isLoggedIn = false;

        Notiflix.Notify.info('See you again', notifySettings);
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        Notiflix.Notify.failure(
          'Something went wrong, please try again',
          notifySettings
        );
      });
    //   .addCase(fetchCurrentUser.pending, onPending)
    //   .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
    //     state.isLoading = false;
    //     state.user = payload;
    //     state.isLoggedIn = true;
    //     Notiflix.Notify.success(
    //       `Welcome back, ${payload.name}!`,
    //       notifySettings
    //     );
    //   })
    //   .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    //   if (payload === 401) {
    //     state.user = { name: null, email: null };
    //     state.token = null;
    //     state.isLoggedIn = false;
    //   }
    // });
  },
});
