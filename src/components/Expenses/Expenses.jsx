import { useSelector } from 'react-redux';
import svg from '../../images/icons_sprite.svg';
import styledComponents from './styleExpenses';
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

const Expenses = ({ onClick }) => {
  const [filter, setFilter] = useState('');
  const statistics = useSelector(state => state.statistics.statistics);

  if (!statistics) {
    return (
      <BoxStats>
        <TitleOfBalanceChanges>"No data to display!"</TitleOfBalanceChanges>
      </BoxStats>
    );
  }

  const onItemClick = event => {
    setFilter(event.currentTarget.id);
  };
  const filtredData = () => {
    if (!filter) return;

    const data = statistics.data.expenses.expensesData;

    const [, expenses] = Object.entries(data).filter(el => {
      return el[0] === filter;
    })[0] || [null, false];

    const res = Object.entries(expenses)
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

  const {
    expenses: {
      expensesData: {
        Продукты: products,
        Алкоголь: alcohol,
        Развлечения: entertainment,
        Здоровье: health,
        Транспорт: transport,
       // eslint-disable-next-line no-useless-computed-key
        ['Всё для дома']: housing,
        Техника: technique,
        // eslint-disable-next-line no-useless-computed-key
        ['Коммуналка и связь']: communal,
       // eslint-disable-next-line no-useless-computed-key
        ['Спорт и хобби']: hobbies,
        Образование: education,
        Прочее: other,
      },
      expenseTotal,
    },
  } = statistics.data;

  return (
    <>
      <BoxStats>
        <div>
          <BtnToggleStats type="button">
            <svg width="10" height="10" onClick={onClick}>
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
              <ItemOfBalanceChanges onClick={onItemClick} id="Продукты">
                <p>{formating(products.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#products`} />
                  </SvgBoxStyle>
                </BoxForSvg>

                <p>Products</p>
              </ItemOfBalanceChanges>
            )}
            {alcohol && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Алкоголь">
                <p>{formating(alcohol.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#alcohol`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Alcohol</p>
              </ItemOfBalanceChanges>
            )}
            {entertainment && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Развлечения">
                <p>{formating(entertainment.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#entertainment`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Entertainment</p>
              </ItemOfBalanceChanges>
            )}
            {health && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Здоровье">
                <p>{formating(health.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#health`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Health</p>
              </ItemOfBalanceChanges>
            )}
            {transport && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Транспорт">
                <p>{formating(transport.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#transport`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Transport</p>
              </ItemOfBalanceChanges>
            )}
            {housing && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Всё для дома">
                <p>{formating(housing.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#housing`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Housing</p>
              </ItemOfBalanceChanges>
            )}
            {technique && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Техника">
                <p>{formating(technique.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#technique`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Technique</p>
              </ItemOfBalanceChanges>
            )}
            {communal && (
              <ItemOfBalanceChanges
                onClick={onItemClick}
                id="Коммуналка и связь"
              >
                <p>{formating(communal.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#communal`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Communal, communication</p>
              </ItemOfBalanceChanges>
            )}
            {hobbies && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Спорт и хобби">
                <p>{formating(hobbies.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#hobbies`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Sports, hobbies</p>
              </ItemOfBalanceChanges>
            )}
            {education && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Образование">
                <p>{formating(education.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#education`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Education</p>
              </ItemOfBalanceChanges>
            )}
            {other && (
              <ItemOfBalanceChanges onClick={onItemClick} id="Прочее">
                <p>{formating(other.total)}</p>
                <BoxForSvg>
                  {' '}
                  <SvgBoxStyle>
                    <use href={`${svg}#other`} />
                  </SvgBoxStyle>
                </BoxForSvg>
                <p>Other</p>
              </ItemOfBalanceChanges>
            )}
          </ListOfBalanceChanges>
        ) : (
          <TitleOfBalanceChanges>"No data to display!"</TitleOfBalanceChanges>
        )}
      </BoxStats>
      {filtredData() && (
        <BoxForSchedule>
          <Chart data={filtredData()} />{' '}
        </BoxForSchedule>
      )}
    </>
  );
};

export default Expenses;
