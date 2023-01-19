import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExpenseTransactions,
  fetchIncomeTransactions,
  removeTransaction,
} from 'redux/transactions/transactionsOps';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { wordTranslator } from 'utils/wordTranslator';
import { getParseDate } from 'utils/getParseDate';

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

  return (
    <>
      <ul>
        <li style={{ display: 'flex' }}>
          <p>Date</p>
          <p>Description</p>
          <p>Category</p>
          <p>Sum</p>
        </li>
        {transactions[type].length !== 0 &&
          transactions[type].map(operation => {
            return (
              <li key={operation._id} style={{ display: 'flex' }}>
                <p>{getParseDate(operation.date)}</p>
                <p>{operation.description}</p>
                <p>{wordTranslator(operation.category)}</p>
                <p>
                  {type === 'expense' && '-'} {operation.amount} UAH.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(removeTransaction(operation._id));
                  }}
                >
                  Del
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default TransactionsList;
