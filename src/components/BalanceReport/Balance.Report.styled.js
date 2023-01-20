import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BalanceContainer = styled.div`
  height: 44px;

  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-top: 40px;
  margin: 0 auto;

  background-color: transparent;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 480px) {
    height: auto;

    flex-direction: column-reverse;

    padding-top: 22px;
  }
`;

export const BalanceForm = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;

    order: 2;

    margin-top: 32px;
  }
`;

export const Text = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;

  color: rgba(82, 85, 95, 0.7);

  margin-right: 20px;

  @media screen and (max-width: 480px) {
    margin: 0;
  }
`;

export const CurrentBalance = styled.p`
  box-sizing: border-box;

  position: relative;

  height: 44px;
  width: 125px;

  display: flex;
  justify-content: right;
  align-items: center;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.67px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;

  color: black;
  background-color: ${p => p.theme.colors.BgGray};

  padding-right: 20px;
  border: 2px solid #ffffff;
  border-radius: 16px;
  margin-right: 16px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    width: 183px;

    justify-content: center;

    padding: 0;
    border-radius: 22px;
    margin: 0;
    margin-top: 8px;
  }
`;

export const Input = styled.input`
  min-width: 10px;
  max-width: 300px;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.67px;
  letter-spacing: 0.02em;
  text-align: right;

  color: black;

  background-color: transparent;

  border: none;

  outline: none;

  @media screen and (max-width: 480px) {
    width: 80px;
  }
`;

export const CurrentBalanceContainer = styled.div`
  position: relative;
`;

export const StyledBtn = styled.button`
  box-sizing: border-box;

  height: 44px;
  width: 125px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: rgba(82, 85, 95, 0.7);
  background-color: ${p => p.theme.colors.BgGray};

  transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 2px solid #ffffff;
  border-radius: 16px;

  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background-color: ${p => p.theme.colors.PrimaryOrange};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;

  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.04em;

  text-decoration: none;

  color: rgba(82, 85, 95, 0.7);

  transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.PrimaryOrange};
  }

  @media screen and (max-width: 480px) {
    align-self: flex-start;

    margin-bottom: 22px;
  }
`;

export const PeriodContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const MainPageSvg = styled.svg`
  height: 18px;
  width: 18px;

  margin-right: 19px;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-left: 3px;
  }
`;

export const Period = styled.p`
  font-size: 12px;
  line-height: 1.67;
  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(82, 85, 95, 0.7);

  margin: 0;
`;

export const PeriodBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border: none;

  cursor: pointer;
`;

export const PeriodArrow = styled.svg`
  height: 14px;
  width: 12px;
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PeriodData = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;

  user-select: none;
`;

export const MainPageText = styled.p`
  margin: 0;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const MounthBox = styled.div`
min-width: 150px;
`;