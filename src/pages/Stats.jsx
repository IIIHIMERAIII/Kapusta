import Income from 'components/Income/Income';
import Expenses from 'components/Expenses/Expenses';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styledComponents from 'components/Expenses/styleExpenses';
import { useSelector, useDispatch } from 'react-redux';
import { getStatistics } from 'redux/statistics/statsOperations';

const { BoxStats } = styledComponents;

const Statistics = () => {

  const token = useSelector(state => state.auth.token);
  const period = useSelector(state => state.statistics.period);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics({ token, period }));
  }, [dispatch, period, token]);

  const [toggleStats, setToggleStats] = useState(false);
  const onClick = () => {
    setToggleStats(prev => !prev);
  };

  return (
    <>
      <BoxStats>
        <NavLink to="/wallet">Transactions</NavLink>
        {toggleStats ? (
          <Income onClick={onClick} />
        ) : (
          <Expenses onClick={onClick} />
        )}
      </BoxStats>
    </>
  );
};

export default Statistics;
