import svg from "../../images/icons_sprite.svg";
import styledComponents from "components/Expenses/styleExpenses";

const { ListOfBalanceChanges, ItemOfBalanceChanges, TitleOfBalanceChanges, SvgBoxStyle } =
  styledComponents;

const Income = () => {
  return (
    <div>
      <div>
        <button></button>
        <TitleOfBalanceChanges>Income</TitleOfBalanceChanges>
        <button></button>
      </div>
      <ListOfBalanceChanges>
        <ItemOfBalanceChanges>
          <p>50000</p>
          <SvgBoxStyle width="56" height="56">
            <use href={`${svg}#salary`} />
          </SvgBoxStyle>
          <p>Salary</p>
        </ItemOfBalanceChanges>
        <ItemOfBalanceChanges>
          <p>50000</p>
          <SvgBoxStyle width="56" height="56">
            <use href={`${svg}#income`} />
          </SvgBoxStyle>
          <p>Add. income</p>
        </ItemOfBalanceChanges>
      </ListOfBalanceChanges>
    </div>
  );
};

export default Income;
