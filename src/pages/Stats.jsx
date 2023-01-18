import Income from 'components/Income/Income';
import Expenses from 'components/Expenses/Expenses';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styledComponents from 'components/Expenses/styleExpenses'

const { BoxStats } = styledComponents

const Statistics = () => {
  const [toggleStats, setToggleStats] = useState(false);
  const onClick = () => {
    setToggleStats(prev => !prev);
  };

  return (
    <>
      <BoxStats>
        <NavLink to="/transactions">Transactions</NavLink>
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
