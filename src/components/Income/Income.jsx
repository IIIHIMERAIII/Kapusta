import { useSelector } from 'react-redux';
import svg from '../../images/icons_sprite.svg';
import styledComponents from 'components/Expenses/styleExpenses';

const {
  ListOfBalanceChanges,
  ItemOfBalanceChanges,
  TitleOfBalanceChanges,
  SvgBoxStyle,
  BtnToggleStats,
  BoxForSvg,
} = styledComponents;

const Income = ({ onClick }) => {
  const statistics = useSelector(state => state.statistics.statistics);

  if (!statistics) {
    return;
  }

  const {
    incomes: {
      incomesData: { ['З/П']: salary, ['Доп. доход']: income },
      incomeTotal,
    },
  } = statistics.data;

  return (
    <div>
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
              <p>{salary.total}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#salary`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Salary</p>
            </ItemOfBalanceChanges>
          )}
          {income && (
            <ItemOfBalanceChanges>
              <p>{income.total}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#income`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Add. income</p>
            </ItemOfBalanceChanges>
          )}
        </ListOfBalanceChanges>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default Income;
