import styled from 'styled-components';

export const BalanceContainer = styled.div`
  height: 44px;
  width: 334px;

  display: flex;
  align-items: center;

  margin: 0 auto;

  background-color: red;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;

  color: rgba(82, 85, 95, 0.7);

  margin-right: 20px;
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

  padding-right: 20px;
  border: 2px solid #ffffff;
  border-radius: 16px;
  margin-right: 16px;
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

  transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 2px solid #ffffff;
  border-radius: 16px;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.PrimaryOrange};
  }
`;
