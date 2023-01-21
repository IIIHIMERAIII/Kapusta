import styled from 'styled-components';
import { theme } from 'components/Theme';

const stylesTransactionsList = {
  DataWrapper: styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column-reverse;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  `,

  DateDescrWrapper: styled.div`
    display: flex;
  `,

  BoxForList: styled.div`
    width: 625px;
    @media screen and (min-width: 768px) {
      position: relative;
    }
    @media screen and (min-width: 1280px) {
      width: 746px;
    }
  `,

  ListHeaderItems: styled.div`
    position: sticky;
    display: none;
    align-items: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 40px;
    padding: 0 28px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    background-color: ${theme.colors.PrimaryGray};
    @media screen and (min-width: 768px) {
      display: flex;
      padding: 0 20px;
    }
    @media screen and (min-width: 768px) {
      padding: 0 28px;
    }
  `,

  DateHeaderStyle: styled.p`
    width: 85px;
    margin-right: 25px;
  `,

  DescriptionHeaderStyle: styled.p`
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 1280px) {
      margin-right: 35px;
    }
  `,

  CategoryHeaderStyle: styled.p`
    width: 125px;
    text-align: center;
    @media screen and (min-width: 1280px) {
      width: 115px;
      margin-right: 50px;
    }
  `,

  AmountHeaderStyle: styled.p`
    width: 125px;
    text-align: center;
    margin-right: 20px;
    @media screen and (min-width: 1280px) {
      width: 150px;
      margin-right: 50px;
    }
  `,

  List: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
    padding: 0;
    @media screen and (min-width: 768px) {
      gap: 0px;
      overflow-y: auto;
      max-height: 344px;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.PrimaryOrange};
        border-radius: 2px;
      }
      ::-webkit-scrollbar-track {
        background-color: ${theme.colors.PrimaryGray};
      }
    }
    @media screen and (min-width: 1280px) {
      max-height: 400px;
    }
  `,

  ListItems: styled.li`
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0 20px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    border-bottom: 2px solid ${theme.colors.PrimaryGray};
    @media screen and (min-width: 768px) {
      border-left: 2px solid ${theme.colors.PrimaryGray};
      border-right: 2px solid ${theme.colors.PrimaryGray};
    }
  `,

  DateStyle: styled.p`
    width: 85px;
    margin-right: 25px;
  `,

  DescriptionStyle: styled.p`
    width: 170px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 1280px) {
      margin-right: 35px;
    }
  `,

  CategoryStyle: styled.p`
    font-weight: 700;
    width: 125px;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-weight: 400;
      text-align: center;
    }
    @media screen and (min-width: 1280px) {
      width: 115px;
      margin-right: 50px;
    }
  `,

  AmountStyle: styled.p`
    color: ${props => (props.type === 'expense' ? 'red' : 'green')};
    font-weight: 700;
    width: 125px;
    text-align: center;
    margin-right: 20px;
    @media screen and (min-width: 1280px) {
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
