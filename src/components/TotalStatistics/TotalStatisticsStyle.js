import styled from '@emotion/styled';
import { theme } from 'components/Theme';

const TotalStatsStyle = {
    BoxStats: styled.div`
    display: block;
    text-align: center;
    width: 700px;
    padding: 15px;
    border-radius: 30px;
    margin: 0 auto 30px auto;
    background-color: ${theme.colors.PrimaryWhite};
    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 5px 5px;
    }

    @media screen and (min-width: 1030px) {
      width: 1030px;
    }
  `,
  List: styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    column-gap: 40px;
    list-style: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${theme.colors.TextGray};
    @media screen and (max-width: 630px) {
      column-gap: 10px;
      width: 100%;
    }
  `,
    AmountExpenses: styled.span`
    display: inline-block;
    margin-left: 15px;
    color: red;
    `,
    AmountIncome: styled.span`
    display: inline-block;
    margin-left: 15px;
    color: green;
    `,
};

export default TotalStatsStyle;
