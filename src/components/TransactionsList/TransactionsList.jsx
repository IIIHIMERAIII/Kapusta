import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenseTransactions } from 'redux/transactions/transactionsOps';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';

function TransactionsList({ type }) {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'expense') {
      dispatch(fetchExpenseTransactions());
    }
  }, [dispatch, type]);
  console.log('transactions', transactions);
  return (
    <ul>
      <li></li>
      {transactions.expense.length !== 0 &&
        transactions.expense.map(operation => {
          return <li key={operation._id}>{operation.description}</li>;
        })}
    </ul>
  );
}

export default TransactionsList;
