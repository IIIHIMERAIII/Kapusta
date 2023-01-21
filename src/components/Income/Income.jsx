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
} = styledComponents;

const Income = ({ onClick }) => {
  const statistics = useSelector(state => state.statistics.statistics);
  const [filter, setFilter] = useState();

  if (!statistics) {
    return;
  }

  const {
    incomes: {
      incomesData: { ['З/П']: salary, ['Доп. доход']: income },
      incomeTotal,
    },
  } = statistics.data;

  // const test = [
  //   {
  //     name: 'Pork',
  //     cost: 2300,
  //   },
  //   {
  //     name: 'Beaf',
  //     cost: 4000,
  //   },
  //   {
  //     name: 'Tree',
  //     cost: 300,
  //   },
  // ];
  const onItemClick = event => {
    setFilter(event.currentTarget.id);
  };
  const filtredData = () => {
    const data = statistics.data.incomes.incomesData;

    if (!data) return;
    if (!filter) return;
    const [_, incomes] = Object.entries(data).filter(el => el[0] === filter)[0];

    return Object.entries(incomes)
      .filter(el => {
        return el[0] !== 'total';
      })
      .map(el => {
        return { name: el[0], cost: el[1] };
      });
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
          <div>Empty</div>
        )}
      </BoxStats>
      <BoxStats>{filter && <Chart data={filtredData()} />}</BoxStats>
    </>
  );
};

export default Income;
