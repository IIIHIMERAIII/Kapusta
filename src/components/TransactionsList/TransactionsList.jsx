import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchExpenseTransactions,
  fetchIncomeTransactions,
  removeTransaction,
} from 'redux/transactions/transactionsOps';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';
import { wordTranslator } from 'utils/wordTranslator';
import { getParseDate } from 'utils/getParseDate';
import stylesTransactionsList from './TransactionsListStyle';
import svg from '../../images/icons_sprite.svg';

const {
  BoxForList,
  List,
  ListItems,
  BtnForRemove,
  DateStyle,
  DescriptionStyle,
  CategoryStyle,
  AmountStyle,
  ListHeaderItems,
  SvgBoxStyle,
} = stylesTransactionsList;

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
      <InputTransactionForm type={type} />
      <BoxForList>
        <List>
          <ListHeaderItems>
            <DateStyle>Date</DateStyle>
            <DescriptionStyle>Description</DescriptionStyle>
            <CategoryStyle>Category</CategoryStyle>
            <AmountStyle>Sum</AmountStyle>
          </ListHeaderItems>
          {transactions[type].length !== 0 &&
            transactions.expense.map(operation => {
              return (
                <ListItems key={operation._id}>
                  <DateStyle>{getParseDate(operation.date)}</DateStyle>
                  <DescriptionStyle>{operation.description}</DescriptionStyle>
                  <CategoryStyle>
                    {wordTranslator(operation.category)}
                  </CategoryStyle>
                  <AmountStyle>
                    {type === 'expense' && '-'} {operation.amount} UAH.
                  </AmountStyle>
                  <BtnForRemove
                    type="button"
                    onClick={() => {
                      dispatch(removeTransaction(operation._id));
                    }}
                  >
                    <SvgBoxStyle>
                      <use href={`${svg}#delete`} />
                    </SvgBoxStyle>{' '}
                  </BtnForRemove>
                </ListItems>
              );
            })}
        </List>
      </BoxForList>
    </>
  );
}

export default TransactionsList;
