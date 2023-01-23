import { useState } from 'react';
import svg from '../../images/icons_sprite.svg';
import {
  BalanceContainer,
  PeriodContainer,
  MainPageSvg,
  Period,
  PeriodArrow,
  PeriodData,
  PeriodBtn,
  StyledLink,
  MainPageText,
  MounthBox,
  MounthContainer,
} from './Balance.Report.styled';
import { BalanceReportFrom } from './BalanceReportForm';
import { currentPeriod } from 'redux/statistics/statsSlice';
import { getStatistics } from 'redux/statistics/statsOperations';
import { useSelector, useDispatch } from 'react-redux';

export function BalanceReport() {
  const [month, setMonthes] = useState(1);
  const statePeriod = useSelector(state => state.statistics.period);
  const dispatch = useDispatch();

  const getDate = idx => {
    const objDate = new Date();

    objDate.setDate(1);
    objDate.setMonth(idx - 1);

    const year = objDate.getFullYear();

    const locale = 'en-us',
      month = objDate.toLocaleString(locale, { month: 'long' });

    return `${month} ${year}`;
  };

  const nextMonth = () => {
    setMonthes(prevState => prevState + 1);

    const newPeriod = new Date(JSON.parse(statePeriod)) 
    newPeriod.setDate(1);
    newPeriod.setMonth(new Date(JSON.parse(statePeriod)).getMonth() + 1);
    const month = newPeriod.getMonth() + 1
    const period = `${newPeriod.getFullYear()}-${month > 10 ? month : `0${month}`}`
   
    dispatch(currentPeriod(JSON.stringify(newPeriod)))
    dispatch(getStatistics({ period }))
  }

  const prevMonth = () => {
    setMonthes(prevState => prevState - 1);

    const newPeriod = new Date(JSON.parse(statePeriod)) 
    newPeriod.setDate(1);
    newPeriod.setMonth(new Date(JSON.parse(statePeriod)).getMonth() - 1);
    const month = newPeriod.getMonth() + 1
    const period = `${newPeriod.getFullYear()}-${month > 10 ? month : `0${month}`}`
   
    dispatch(currentPeriod(JSON.stringify(newPeriod)))
    dispatch(getStatistics({ period }))
  }

  return (
    <BalanceContainer>
      <PeriodContainer>
        <StyledLink to="/wallet">
          <MainPageSvg>
            <use href={`${svg}#arrow_back`}></use>
          </MainPageSvg>
          <MainPageText>Main Page</MainPageText>
        </StyledLink>

        <BalanceReportFrom />

        <MounthBox>
          <Period>Current period</Period>
          <MounthContainer>
            <PeriodBtn type="button" onClick={prevMonth}>
              <PeriodArrow>
                <use href={`${svg}#arrow_left`}></use>
              </PeriodArrow>
            </PeriodBtn>
            <PeriodData>{getDate(month)}</PeriodData>
            <PeriodBtn type="button" onClick={nextMonth}>
              <PeriodArrow>
                <use href={`${svg}#arrow_right`}></use>
              </PeriodArrow>
            </PeriodBtn>
          </MounthContainer>
        </MounthBox>
      </PeriodContainer>
    </BalanceContainer>
  );
}
