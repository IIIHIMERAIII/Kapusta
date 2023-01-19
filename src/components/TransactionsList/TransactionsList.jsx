import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExpenseTransactions,
  fetchIncomeTransactions,
} from 'redux/transactions/transactionsOps';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';

function TransactionsList({ type }) {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

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
    <ul>
      <li></li>
      {transactions[type].length !== 0 &&
        transactions.expense.map(operation => {
          return <li key={operation._id}>{operation.description}</li>;
        })}
    </ul>
  );
}

export default TransactionsList;
