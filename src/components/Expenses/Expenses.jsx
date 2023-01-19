import { useSelector } from 'react-redux';
import svg from '../../images/icons_sprite.svg';
import styledComponents from './styleExpenses';

const {
  ListOfBalanceChanges,
  ItemOfBalanceChanges,
  TitleOfBalanceChanges,
  SvgBoxStyle,
  BtnToggleStats,
  BoxForSvg,
} = styledComponents;

const Expenses = ({ onClick }) => {
  const statistics = useSelector(state => state.statistics.statistics);

  if (!statistics) {
    return;
  }

  const {
    expenses: {
      expensesData: {
        Продукты: products,
        Алкоголь: alcohol,
        Развлечения: entertainment,
        Здоровье: health,
        Транспорт: transport,
        ['Всё для дома']: housing,
        Техника: technique,
        ['Коммуналка и связь']: communal,
        ['Спорт и хобби']: hobbies,
        Образование: education,
        Прочее: other,
      },
      expenseTotal,
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
        <TitleOfBalanceChanges>Expenses</TitleOfBalanceChanges>
        <BtnToggleStats type="button" onClick={onClick}>
          <svg width="10" height="10">
            <use href={`${svg}#arrow_right`} />
          </svg>
        </BtnToggleStats>
      </div>

      {expenseTotal ? (
        <ListOfBalanceChanges>
          {products && (
            <ItemOfBalanceChanges>
              <p>{products.total}</p>
                <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#products`} />
              </SvgBoxStyle></BoxForSvg>
                             
              <p>Products</p>
            </ItemOfBalanceChanges>
          )}
          {alcohol && (
            <ItemOfBalanceChanges>
              <p>{alcohol.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#alcohol`} />
              </SvgBoxStyle>
              <p>Alcohol</p>
            </ItemOfBalanceChanges>
          )}
          {entertainment && (
            <ItemOfBalanceChanges>
              <p>{entertainment.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#entertainment`} />
              </SvgBoxStyle>
              <p>Entertainment</p>
            </ItemOfBalanceChanges>
          )}

          {health && (
            <ItemOfBalanceChanges>
              <p>{health.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#health`} />
              </SvgBoxStyle>
              <p>Health</p>
            </ItemOfBalanceChanges>
          )}
          {transport && (
            <ItemOfBalanceChanges>
              <p>{transport.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#transport`} />
              </SvgBoxStyle>
              <p>Transport</p>
            </ItemOfBalanceChanges>
          )}
          {housing && (
            <ItemOfBalanceChanges>
              <p>{housing.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#housing`} />
              </SvgBoxStyle>
              <p>Housing</p>
            </ItemOfBalanceChanges>
          )}
          {technique && (
            <ItemOfBalanceChanges>
              <p>{technique.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#technique`} />
              </SvgBoxStyle>
              <p>Technique</p>
            </ItemOfBalanceChanges>
          )}
          {communal && (
            <ItemOfBalanceChanges>
              <p>{communal.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#communal`} />
              </SvgBoxStyle>
              <p>Communal, communication</p>
            </ItemOfBalanceChanges>
          )}
          {hobbies && (
            <ItemOfBalanceChanges>
              <p>{hobbies.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#hobbies`} />
              </SvgBoxStyle>
              <p>Sports, hobbies</p>
            </ItemOfBalanceChanges>
          )}
          {education && (
            <ItemOfBalanceChanges>
              <p>{education.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#education`} />
              </SvgBoxStyle>
              <p>Education</p>
            </ItemOfBalanceChanges>
          )}
          {other && (
            <ItemOfBalanceChanges>
              <p>{other.total}</p>
              <SvgBoxStyle width="56" height="56">
                <use href={`${svg}#other`} />
              </SvgBoxStyle>
              <p>Other</p>
            </ItemOfBalanceChanges>
          )}
        </ListOfBalanceChanges>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default Expenses;
