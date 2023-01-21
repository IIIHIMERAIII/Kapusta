import Income from 'components/Income/Income';
import Expenses from 'components/Expenses/Expenses';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatistics } from 'redux/statistics/statsOperations';
import { BalanceReport } from 'components/BalanceReport/BalanceReport'
import TotalStatistics from 'components/TotalStatistics/TotalStatistics';
import { Main, Bg } from 'components/Container/container';



const Statistics = () => {
const [toggleStats, setToggleStats] = useState(false);

  const token = useSelector(state => state.auth.token);
  const period = useSelector(state => state.statistics.period);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics({ token, period }));
  }, [dispatch, period, token]);

  const statistics = useSelector(state => state.statistics.statistics);

    if (!statistics) {
    return;
  }

  const onClick = () => {
    setToggleStats(prev => !prev);
  };

  return (
    <Bg>
      <Main>
      <BalanceReport />
      <TotalStatistics expenses={ statistics.data.expenses.expenseTotal} income={ statistics.data.incomes.incomeTotal} />
        {toggleStats ? (
          <Income onClick={onClick} />
        ) : (
          <Expenses onClick={onClick} />
        )}
      </Main>
    </Bg>
  )
};

export default Statistics;
