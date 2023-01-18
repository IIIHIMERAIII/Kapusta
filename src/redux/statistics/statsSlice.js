import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './statsOperations';

const initialState = {
  statistics: null,
  isLoading: false,
  error: null,
  period: '2020-12',
};

const statusProgress = (state, action) => {
  state.isLoading = true;
};

const statusError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const statsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getStatistics.pending, state => {
        statusProgress(state);
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        statusError(state, action);
      })
  },
});

export default statsSlice.reducer;