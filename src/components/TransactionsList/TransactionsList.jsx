import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExpenseTransactions,
  fetchIncomeTransactions,
} from 'redux/transactions/transactionsOps';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';


function TransactionsList({ type }) {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  const getDate = operationDate => {
    const instance = new Date(Date.parse(operationDate));
    const day = instance.getDate();
    const getCurrMonth = () => {
      const month = instance.getMonth() + 1;
      if (month < 9) {
        return `0${month}`;
      }
      return month;
    };
    const month = getCurrMonth();
    const year = instance.getFullYear();
    return `${day}.${month}.${year}`;
  };

  useEffect(() => {
    if (type === 'expense') {
      dispatch(fetchExpenseTransactions());
      return;
    }
    if (type === 'income') {
      dispatch(fetchIncomeTransactions());
      return;
    }
  }, [dispatch, type]);

  console.log('transactions', transactions);

  return (
    <>
      <InputTransactionForm type={type} />
    <ul>
      <li></li>
      {transactions[type].length !== 0 &&
        transactions.expense.map(operation => {
          return (
            <li key={operation._id}>
              <p>{getDate(operation.date)}</p>
              <p>{operation.description}</p>
              <p>{operation.category}</p>
              <p>
                {type === 'expense' && '-'} {operation.amount} UAH.
              </p>
              <button>Del</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TransactionsList;
