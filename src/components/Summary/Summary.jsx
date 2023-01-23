import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { formattingSum } from 'utils/formattingSum';
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
              <SummaryItems key={wordTranslator(operation[0])}>
                <SummaryText>{wordTranslator(operation[0])}</SummaryText>
                <SummaryText>{formattingSum(operation[1])}</SummaryText>
              </SummaryItems>
            );
          })}
    </SummaryList>
  );
}

export default Summary;
