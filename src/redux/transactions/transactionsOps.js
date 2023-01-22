import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/authOperations';
import { API_TRANSACTION } from 'api/apiTransactionCategories';

export const addTransactionOp = createAsyncThunk(
  'transactions/ADD',

  async ({ type, transaction }, thunkAPI) => {
    try {
      const { data } = await instance.post(
        API_TRANSACTION[type].apiAddTransactionEndpoint,
        transaction
      );
      const summary = await instance.get(`transaction/${type}`);
      return { type, data, monthsStats: summary.data.monthsStats };
    } catch (error) {
      Notiflix.Notify.warning(
        `Server error (during fetching categories): ${error.message}`,
        notifySettings
      );
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const fetchUserBalance = createAsyncThunk(
  'auth/balance',
  async ({ value }, { rejectWithValue }) => {
    try {
      if (value !== 0) {
        const { data } = await instance.patch('/user/balance', {
          newBalance: value,
        });
        return data;
      }
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

export const fetchExpenseTransactions = createAsyncThunk(
  'transactions/getExpense',
  async (_, { rejectWithValue }) => {
    try {
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
    try {
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
  async ({ id, type }, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`transaction/${id}`);
      const summary = await instance.get(`transaction/${type}`);
      return {
        id,
        newBalance: data.newBalance,
        monthsStats: summary.data.monthsStats,
      };
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

// export const API_TRANSACTION = {
//   expense: {
//     apiTransactionsCategoriesEndpoint: 'transaction/expense-categories',
//     apiAddTransactionEndpoint: 'transaction/expense',
//     apiCategories: {
//       Продукты: 'Products',
//       Алкоголь: 'Alcohol',
//       Развлечения: 'Entertainment',
//       Здоровье: 'Health',
//       Транспорт: 'Transport',
//       'Всё для дома': 'Housekeeping',
//       Техника: 'Electronics',
//       'Коммуналка и связь': 'Communications',
//       'Спорт и хобби': 'Activities',
//       Образование: 'Education',
//       Прочее: 'Other',
//     },
//   },
//   income: {
//     apiTransactionsCategoriesEndpoint: 'transaction/income-categories',
//     apiAddTransactionEndpoint: 'transaction/income',
//     apiCategories: {
//       'З/П': 'Salary',
//       'Доп. доход': 'AddIncome',
//     },
//   },
// };

export const fetchCategoriesOp = createAsyncThunk(
  'transactions/fetchCategories',
  async (type, thunkAPI) => {
    try {
      const { data } = await instance.get(
        API_TRANSACTION[type].apiTransactionsCategoriesEndpoint
      );
      const optionsArray = data.map((option, i) => {
        return {
          value: i,
          label: API_TRANSACTION[type].apiCategories[option] ?? 'Other',
        };
      });
      return { type, optionsArray };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
