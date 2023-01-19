import { useSelector } from 'react-redux';
import svg from '../../images/icons_sprite.svg';
import styledComponents from './styleExpenses';
import { formating } from 'components/Income/Income';

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
              <p>{formating(products.total)}</p>
                <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#products`} />
              </SvgBoxStyle></BoxForSvg>
                             
              <p>Products</p>
            </ItemOfBalanceChanges>
          )}
          {alcohol && (
            <ItemOfBalanceChanges>
              <p>{formating(alcohol.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#alcohol`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Alcohol</p>
            </ItemOfBalanceChanges>
          )}
          {entertainment && (
            <ItemOfBalanceChanges>
              <p>{formating(entertainment.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#entertainment`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Entertainment</p>
            </ItemOfBalanceChanges>
          )}

          {health && (
            <ItemOfBalanceChanges>
              <p>{formating(health.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#health`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Health</p>
            </ItemOfBalanceChanges>
          )}
          {transport && (
            <ItemOfBalanceChanges>
              <p>{formating(transport.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#transport`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Transport</p>
            </ItemOfBalanceChanges>
          )}
          {housing && (
            <ItemOfBalanceChanges>
              <p>{formating(housing.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#housing`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Housing</p>
            </ItemOfBalanceChanges>
          )}
          {technique && (
            <ItemOfBalanceChanges>
              <p>{formating(technique.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#technique`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Technique</p>
            </ItemOfBalanceChanges>
          )}
          {communal && (
            <ItemOfBalanceChanges>
              <p>{formating(communal.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#communal`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Communal, communication</p>
            </ItemOfBalanceChanges>
          )}
          {hobbies && (
            <ItemOfBalanceChanges>
              <p>{formating(hobbies.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#hobbies`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Sports, hobbies</p>
            </ItemOfBalanceChanges>
          )}
          {education && (
            <ItemOfBalanceChanges>
              <p>{formating(education.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#education`} />
              </SvgBoxStyle></BoxForSvg>
              <p>Education</p>
            </ItemOfBalanceChanges>
          )}
          {other && (
            <ItemOfBalanceChanges>
              <p>{formating(other.total)}</p>
              <BoxForSvg> <SvgBoxStyle>
                <use href={`${svg}#other`} />
              </SvgBoxStyle></BoxForSvg>
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
