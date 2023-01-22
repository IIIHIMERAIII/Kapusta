import styled from '@emotion/styled';
import { theme } from 'components/Theme';

const styledComponents = {
  BoxForBalance: styled.div`    
  display: block;
    width: 705px;
    padding: 0;
    margin: 0 auto 30px auto;
    @media screen and (max-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 1280px) {
      width: 1035px;
    }
`,
  BoxStats: styled.div`
    display: block;
    text-align: center;
    width: 705px;
    height: 350px;
    padding: 20px;
    border-radius: 30px;
    margin: 0 auto 40px auto;
    background-color: ${theme.colors.PrimaryWhite};
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 5px 5px;
    }

    @media screen and (min-width: 1280px) {
      width: 1035px;
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
    color: ${theme.colors.TextGray};
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
    gap: 10px;

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
    color: ${theme.colors.PrimaryBlack};
  `,
  SvgBoxStyle: styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    margin: -5px;
    fill: ${theme.colors.SVGColor};
    transition: 350ms ease-in-out;
    &:hover,
    &:focus,
    &:active{
    fill: ${theme.colors.PrimaryOrange};
    transform: scale(1.2);
  }
  `,

  BoxForSvg: styled.div`
    background-color: ${theme.colors.PrimaryGray};
    border-radius: 30px;
    width: 46px;
    height: 46px;
    margin: -5px -5px 0 0;
    &:hover {
    background-color: ${theme.colors.PaleOrange};
    transform: scale(1.2);
  }
  `,

  BtnToggleStats: styled.button`
      padding: 5px;
    border: none;
    background-color: transparent;
  `,
};

export default styledComponents;
