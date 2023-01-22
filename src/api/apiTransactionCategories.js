import { instance } from 'redux/auth/authOperations';

export const API_TRANSACTION = {
  expense: {
    apiTransactionsCategoriesEndpoint: 'transaction/expense-categories',
    apiAddTransactionEndpoint: 'transaction/expense',
    apiCategories: {
      Продукты: 'Products',
      Алкоголь: 'Alcohol',
      Развлечения: 'Entertainment',
      Здоровье: 'Health',
      Транспорт: 'Transport',
      'Всё для дома': 'Housekeeping',
      Техника: 'Electronics',
      'Коммуналка и связь': 'Communications',
      'Спорт и хобби': 'Activities',
      Образование: 'Education',
      Прочее: 'Other',
    },
  },
  income: {
    apiTransactionsCategoriesEndpoint: 'transaction/income-categories',
    apiAddTransactionEndpoint: 'transaction/income',
    apiCategories: {
      'З/П': 'Salary',
      'Доп. доход': 'AddIncome',
    },
  },
};

export const getTransactionCategories = async type => {
  try {
    const { data } = await instance.get(
      API_TRANSACTION[type].apiTransactionsCategoriesEndpoint
    );
    return data;
  } catch (error) {
    throw error;
  }
};
