import Income from 'components/Income/Income';
import Expenses from 'components/Expenses/Expenses';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatistics } from 'redux/statistics/statsOperations';
import { BalanceReport } from 'components/BalanceReport/BalanceReport';
import TotalStatistics from 'components/TotalStatistics/TotalStatistics';
import styledComponents from 'components/Expenses/styleExpenses';
import { currentPeriod } from 'redux/statistics/statsSlice';
import { Bg } from 'components/Container/container';

const { BoxForBalance } = styledComponents;

const Statistics = () => {
  const [toggleStats, setToggleStats] = useState(false);

  const statePeriod = useSelector(state => state.statistics.period);

  const dispatch = useDispatch();

  useEffect(() => {
    
    if (!statePeriod) {
    const objDate = new Date();
    const year = objDate.getFullYear();
    const month = objDate.getMonth() + 1
      
    const period = `${year}-${month > 10 ? month : `0${month}`}`
    dispatch(currentPeriod(JSON.stringify(objDate)))
    dispatch(getStatistics({ period }))
    }

    return () => {
      dispatch(currentPeriod(''))
    }

  }, []);

  const statistics = useSelector(state => state.statistics.statistics);

  if (!statistics) {
    return;
  }

  const onClick = () => {
    setToggleStats(prev => !prev);
  };

  return (
    <Bg>
      <BoxForBalance>
        <BalanceReport />
      </BoxForBalance>
      <TotalStatistics
        expenses={statistics.data.expenses.expenseTotal}
        income={statistics.data.incomes.incomeTotal}
      />
      {toggleStats ? (
        <Income onClick={onClick} />
      ) : (
        <Expenses onClick={onClick} />
      )}
    </Bg>
  );
};

export default Statistics;
