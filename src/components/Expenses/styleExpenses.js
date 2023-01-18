import styled from '@emotion/styled';

const styledComponents = {
  BoxStats: styled.div`
    display: block;
    text-align: center;
    width: 700px;
    padding: 20px;
    border-radius: 30px;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 5px 5px;
    }

    @media screen and (min-width: 1030px) {
      width: 1030px;
    }
  `,
  ListOfBalanceChanges: styled.ul`
    display: flex;
    padding: 0;
    width: 625px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    row-gap: 40px;
    column-gap: 30px;
    list-style: none;
    @media screen and (max-width: 630px) {
      column-gap: 10px;
      width: 100%;
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
    display: inline-block;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin: 0 30px 20px 30px;
  `,
  SvgBoxStyle: styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default styledComponents;
