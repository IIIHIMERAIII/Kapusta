import { useState } from 'react';
import svg from '../../images/icons_sprite.svg';
import {
  BalanceContainer,
  PeriodContainer,
  MainPageSvg,
  Period,
  PeriodArrow,
  PeriodData,
  BaseContainer,
  PeriodBtn,
  StyledLink,
  MainPageText,
} from './Balance.Report.styled';
import { BalanceReportFrom } from './BalanceReportForm';

export function BalanceReport() {
  const [month, setMonth] = useState(1);

  const getDate = idx => {
    const objDate = new Date();

    objDate.setDate(1);
    objDate.setMonth(idx - 1);

    const year = objDate.getFullYear();

    const locale = 'en-us',
      month = objDate.toLocaleString(locale, { month: 'long' });

    return `${month} ${year}`;
  };

  const nextMonth = () => setMonth(prevState => prevState + 1);

  const prevMonth = () => setMonth(prevState => prevState - 1);

  return (
    <BalanceContainer>
      <PeriodContainer>
        <StyledLink to="">
          <MainPageSvg>
            <use href={`${svg}#arrow_back`}></use>
          </MainPageSvg>
          <MainPageText>Main Page</MainPageText>
        </StyledLink>

        <BalanceReportFrom />

        <div>
          <Period>Current period</Period>
          <BaseContainer>
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
          </BaseContainer>
        </div>
      </PeriodContainer>
    </BalanceContainer>
  );
}
