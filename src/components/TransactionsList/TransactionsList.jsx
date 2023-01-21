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
import stylesTransactionsList from './TransactionsListStyle';
import svg from '../../images/icons_sprite.svg';
import { formattingSum } from 'utils/formattingSum';
import { sortTransactions } from 'utils/sortTransactions';

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
  CategoryHeaderStyle,
  AmountHeaderStyle,
  DescriptionHeaderStyle,
  DateHeaderStyle,
} = stylesTransactionsList;

function TransactionsList({ type }) {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  // const clientWidth = window.matchMedia('(min-width: 350px)');
  // console.log('clientWidth :>> ', clientWidth);
  document.addEventListener('resize', event => {
    console.log('event :>> ', event);
  });
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
      <BoxForList>
        <ListHeaderItems>
          <DateHeaderStyle>Date</DateHeaderStyle>
          <DescriptionHeaderStyle>Description</DescriptionHeaderStyle>
          <CategoryHeaderStyle>Category</CategoryHeaderStyle>
          <AmountHeaderStyle>Sum</AmountHeaderStyle>
        </ListHeaderItems>
        <List>
          {transactions[type].length !== 0 &&
            sortTransactions(transactions[type]).map(operation => {
              return (
                <ListItems key={operation._id}>
                  <DateStyle>{getParseDate(operation.date)}</DateStyle>
                  <DescriptionStyle>{operation.description}</DescriptionStyle>
                  <CategoryStyle>
                    {wordTranslator(operation.category)}
                  </CategoryStyle>
                  <AmountStyle type={type}>
                    {type === 'expense' && '-'}{' '}
                    {formattingSum(operation.amount)} UAH.
                  </AmountStyle>
                  <BtnForRemove
                    type="button"
                    onClick={() => {
                      dispatch(removeTransaction({ id: operation._id, type }));
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
