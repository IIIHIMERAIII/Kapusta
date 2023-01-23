import styled from 'styled-components';
import { theme } from 'components/Theme';

const stylesTransactionsList = {
  BoxForList: styled.div`
    width: 100%;
    @media screen and (min-width: 768px) {
    margin-top:80px;
    }
    @media screen and (min-width: 1280px) {
      max-width: 746px;
    }
  `,

  ListHeaderItems: styled.div`
    display: none;
    align-items: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 40px;
    padding: 0 28px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
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
    margin: 0;
    width: 85px;
    margin-right: 25px;
  `,

  DescriptionHeaderStyle: styled.p`
    margin: 0;
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 1280px) {
      margin-right: 35px;
    }
  `,

  CategoryHeaderStyle: styled.p`
    margin: 0;
    width: 125px;
    text-align: center;
    @media screen and (min-width: 1280px) {
      width: 115px;
      margin-right: 50px;
    }
  `,

  AmountHeaderStyle: styled.p`
    margin: 0;
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
    padding: 12px 20px 12px;
    max-height: 168px;
    overflow-y: auto;
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
    @media screen and (min-width: 768px) {
      padding: 0px;
      gap: 0px;
      max-height: 360px;
    }
    @media screen and (min-width: 1280px) {
      max-height: 400px;
    }
  `,

  ListItems: styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 38px;
    padding: 0 0 8px 0;
    border-bottom: 2px solid ${theme.colors.PrimaryGray};
    @media screen and (min-width: 768px) {
      padding: 0px 24px 0px 20px;
      border-bottom: 2px solid ${theme.colors.PrimaryGray};
      border-left: 2px solid ${theme.colors.PrimaryGray};
      border-right: 2px solid ${theme.colors.PrimaryGray};
    }
  `,

  DataWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 50%;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: auto;
    }
  `,

  DescriptionStyleMobileWrapper: styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    display: block;
    @media screen and (min-width: 768px) {
      display: none;
    }
  `,

  DescriptionStyleTabletWrapper: styled.div`
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  `,

  DescriptionStyle: styled.p`
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.04em;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: 768px) {
      height: auto;
      width: 170px;
      font-weight: 400;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 35px;
    }
  `,

  DateDescrWrapper: styled.div`
    display: flex;
    align-items: center;
  `,

  DateStyle: styled.p`
    margin: 0;
    font-weight: 400;
    margin-right: 20px;
    width: 44px;
    letter-spacing: 0.04em;
    font-size: 8px;
    line-height: 9px;
    @media screen and (min-width: 768px) {
      width: 84px;
      font-size: 12px;
      line-height: 1.17;
    }
  `,

  CategoryStyle: styled.p`
    margin: 0;
    font-weight: 400;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin: 0;
    letter-spacing: 0.04em;
    font-size: 8px;
    line-height: 9px;
    @media screen and (min-width: 768px) {
      width: 125px;
      font-size: 12px;
      line-height: 1.17;
    }
    @media screen and (min-width: 1280px) {
      width: 115px;
      margin-right: 50px;
    }
  `,

  AmountWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 20px;
    width: 50%;
    @media screen and (min-width: 768px) {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 40px;
      width: auto;
    }
  `,

  AmountStyle: styled.p`
    margin: 0;
    letter-spacing: 0.04em;
    font-size: 12px;
    line-height: 1.17;
    white-space: nowrap;
    color: ${props => (props.type === 'expense' ? 'red' : 'green')};
    font-weight: 700;
    text-align: center;
    @media screen and (min-width: 1280px) {
      width: 150px;
    }
  `,

  BtnForRemove: styled.button`
    display: block;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
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
