import styled from "@emotion/styled";

const styledComponents = {
  ListOfBalanceChanges: styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    row-gap: 40px;
    column-gap: 30px;
    list-style: none;
    @media screen and (min-width:414px) {
    column-gap: 10px;
    }
  `,
  ItemOfBalanceChanges: styled.li`
    max-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  `,
  TitleOfBalanceChanges: styled.h3`
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin-bottom: 20px;
  `,
    SvgBoxStyle: styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;

    `

};

export default styledComponents;
