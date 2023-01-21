import { useSelector } from 'react-redux';
import svg from '../../images/icons_sprite.svg';
import styledComponents from 'components/Expenses/styleExpenses';
import { formating } from 'components/Balance/BalanceForm';

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

  if (!statistics) {
    return (
      <TitleOfBalanceChanges>"No data to display!"</TitleOfBalanceChanges>);
  }

  const {
    incomes: {
      incomesData: { ['З/П']: salary, ['Доп. доход']: income },
      incomeTotal,
    },
  } = statistics.data;

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
            <ItemOfBalanceChanges>
              <p>{formating(salary.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#salary`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Salary</p>
            </ItemOfBalanceChanges>
          )}
          {income && (
            <ItemOfBalanceChanges>
              <p>{formating(income.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#income`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Add. income</p>
            </ItemOfBalanceChanges>
          )}
        </ListOfBalanceChanges>
      ) : (
      <TitleOfBalanceChanges>"No data to display!"</TitleOfBalanceChanges>
      )}
      </BoxStats>
      <BoxStats>
      </BoxStats>
</>
  );
};

export default Income;
