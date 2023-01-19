import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { wordTranslator } from 'utils/wordTranslator';
import {
  SummaryItems,
  SummaryList,
  SummaryText,
  SummaryTitle,
} from './Summary.styled';

function Summary() {
  const transactions = useSelector(selectTransactions);

  return (
    <SummaryList>
      <SummaryTitle>Summary</SummaryTitle>
      {transactions?.monthsStats &&
        Object.entries(transactions.monthsStats)
          .filter(operation => typeof operation[1] === 'number')
          .map(operation => {
            return (
              <SummaryItems>
                <SummaryText>{wordTranslator(operation[0])}</SummaryText>
                <SummaryText>{operation[1] + '.00'}</SummaryText>
              </SummaryItems>
            );
          })}
    </SummaryList>
  );
}

export default Summary;
