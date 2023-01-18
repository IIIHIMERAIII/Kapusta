import axios from 'axios';

export const API_TRANSACTION = {
  expence: {
    apiTransactionsCategoriesEndpoint: '/expense-categories',
    apiAddTransactionEndpoint: '/expense',
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
    apiTransactionsCategoriesEndpoint: '/income-categories',
    apiAddTransactionEndpoint: '/income',
    apiCategories: {
      'З/П': 'Salary',
      'Доп. доход': 'AddIncome',
    },
  },
};

const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global/transaction',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const getTransactionCategories = async (type, token, resolve) => {
  try {
    setToken(token);
    const { data } = await instance.get(
      API_TRANSACTION[type].apiTransactionsCategoriesEndpoint
    );
    const objData = [];

    for (let i = 0; i < data.length; i++) {
      const apiCategory = data[i];
      objData[i] = {
        value: i,
        label: API_TRANSACTION[type].apiCategories[apiCategory] || 'Other',
      };
    }
    resolve(objData);
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
