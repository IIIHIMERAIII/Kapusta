import styled from 'styled-components';
import { theme } from 'components/Theme';

const stylesTransactionsList = {
  BoxForList: styled.div`
    width: 625px;
    border-radius: 30px;
    overflow: hidden;
    @media screen and (max-width: 800px) {
      width: 100%;
    }

    @media screen and (min-width: 1030px) {
      width: 750px;
      margin: 60px 0 0 0;
    }
  `,
  List: styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    max-height: 365px;
    overflow-y: auto;
  `,

  ListHeaderItems: styled.li`
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0 20px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    background-color: ${theme.colors.PrimaryGray};
  `,

  ListItems: styled.li`
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0 20px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    border-bottom: 1px solid ${theme.colors.PrimaryGray};
  `,
  DateStyle: styled.p`
    width: 85px;
    margin-right: 25px;
  `,

  DescriptionStyle: styled.p`
    width: 170px;
    @media screen and (min-width: 1030px) {
      width: 190px;
      margin-right: 35px;
    }
  `,

  CategoryStyle: styled.p`
    width: 125px;
    text-align: center;
    @media screen and (min-width: 1030px) {
      width: 115px;
      margin-right: 50px;
    }
  `,

  AmountStyle: styled.p`
    width: 125px;
    text-align: center;
    margin-right: 20px;
    @media screen and (min-width: 1030px) {
      width: 150px;
      margin-right: 50px;
    }
  `,

  BtnForRemove: styled.button`
    display: block;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 0;
    background-color: ${theme.colors.PrimaryGray};
  `,

  SvgBoxStyle: styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    fill: ${theme.colors.SVGColor};
    transition: 350ms ease-in-out;
    &:hover {
      fill: ${theme.colors.PrimaryOrange};
      stroke: ${theme.colors.PrimaryOrange};
      transform: scale(1.2);
    }
  `,
};

export default stylesTransactionsList;
