import { useSelector } from 'react-redux';
import svg from '../../images/icons_sprite.svg';
import styledComponents from 'components/Expenses/styleExpenses';
import { formating } from 'components/Balance/BalanceForm';
import { Chart } from 'components/Chart/Chart';
import { useState } from 'react';

const {
  ListOfBalanceChanges,
  ItemOfBalanceChanges,
  TitleOfBalanceChanges,
  SvgBoxStyle,
  BtnToggleStats,
  BoxForSvg,
  BoxStats,
  BoxForSchedule,
} = styledComponents;

const Income = ({ onClick }) => {
  const statistics = useSelector(state => state.statistics.statistics);
  const [filter, setFilter] = useState();

  if (!statistics) {
    return <TitleOfBalanceChanges>"No data to display!"</TitleOfBalanceChanges>;
  }

  const {
    incomes: {
      incomesData: { ['З/П']: salary, ['Доп. доход']: income },
      incomeTotal,
    },
  } = statistics.data;

  const onItemClick = event => {
    setFilter(event.currentTarget.id);
  };
  const filtredData = () => {
    const data = statistics.data.incomes.incomesData;

    if (!data) return;
    if (!filter) return;

    const [_, incomes] = Object.entries(data).filter(
      el => el[0] === filter
    )[0] || [null, false];

    const res = Object.entries(incomes)
      .filter(el => {
        return el[0] !== 'total';
      })
      .map(el => {
        return { name: el[0], cost: el[1] };
      });

    if (res.length === 0) {
      return null;
    }
    return res;
  };

  return (
    <>
      <BoxStats>
        <div>
          <BtnToggleStats type="button" onClick={onClick}>
            <svg width="10" height="10">
              <use href={`${svg}#arrow_left`} />
            </svg>
          </BtnToggleStats>
          <TitleOfBalanceChanges>Income</TitleOfBalanceChanges>
          <BtnToggleStats type="button" onClick={onClick}>
            <svg width="10" height="10">
              <use href={`${svg}#arrow_right`} />
            </svg>
          </BtnToggleStats>
        </div>
        {incomeTotal ? (
          <ListOfBalanceChanges>
            {salary && (
              <ItemOfBalanceChanges onClick={onItemClick} id="З/П">
                <p>{formating(salary.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#salary`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Salary</p>
              </ItemOfBalanceChanges>
            )}
            {income && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Доп. доход">
                <p>{formating(income.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#income`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Add. income</p>
              </ItemOfBalanceChanges>
            )}
          </ListOfBalanceChanges>
        ) : (
          <TitleOfBalanceChanges>"No data to display!"</TitleOfBalanceChanges>
        )}
      </BoxStats>
      {filter && (<BoxForSchedule><Chart data={filtredData()} /></BoxForSchedule>)}
    </>
  );
};

export default Income;
