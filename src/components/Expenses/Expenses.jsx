import svg from "../../images/icons_sprite.svg";
import styledComponents from "./styleExpenses";

const { ListOfBalanceChanges, ItemOfBalanceChanges, TitleOfBalanceChanges, SvgBoxStyle, BtnToggleStats } =
  styledComponents;

const Expenses = ({ onClick }) => {
    const statistics = {expenses: {expenseTotal: 20,}}

  return (
    <div>
      <div>
        <BtnToggleStats type="button" onClick={onClick}>
          <svg width="10" height="10">
            <use href={`${svg}#arrow_left`} />
          </svg>
        </BtnToggleStats>{' '}
        <TitleOfBalanceChanges>Expenses</TitleOfBalanceChanges>
        <BtnToggleStats type="button" onClick={onClick}>
          <svg width="10" height="10">
            <use href={`${svg}#arrow_right`} />
          </svg>
        </BtnToggleStats>
      </div>

      {statistics.expenses.expenseTotal !== 0 ? (
        <ListOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#products`} />
            </SvgBoxStyle>
            <p>Products</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#alcohol`} />
            </SvgBoxStyle>
            <p>Alcohol</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#entertainment`} />
            </SvgBoxStyle>
            <p>Entertainment</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#health`} />
            </SvgBoxStyle>
            <p>Health</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#transport`} />
            </SvgBoxStyle>
            <p>Transport</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#housing`} />
            </SvgBoxStyle>
            <p>Housing</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#technique`} />
            </SvgBoxStyle>
            <p>Technique</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#communal`} />
            </SvgBoxStyle>
            <p>Communal, communication</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#hobbies`} />
            </SvgBoxStyle>
            <p>Sports, hobbies</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#education`} />
            </SvgBoxStyle>
            <p>Education</p>
          </ItemOfBalanceChanges>
          <ItemOfBalanceChanges>
            <p>5000</p>
            <SvgBoxStyle width="56" height="56">
              <use href={`${svg}#other`} />
            </SvgBoxStyle>
            <p>Other</p>
          </ItemOfBalanceChanges>
        </ListOfBalanceChanges>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default Expenses;
