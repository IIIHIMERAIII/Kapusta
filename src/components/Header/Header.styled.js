import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 56px;

  padding: 0 16px;
  @media screen and (max-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const LogoContainer = styled.div`
  position: relative;

  width: 90px;
  height: 31px;
`;

export const Block = styled.div`
  position: absolute;
  top: 5px;
  left: 6px;

  width: 33px;
  height: 26px;

  border-radius: 8px;

  background-color: #fb7c2f;

  box-shadow: -6px -5px rgba(251, 124, 47, 0.2);
`;

export const LogoSvg = styled.svg`
  position: absolute;
  top: 11px;
  left: 20px;

  height: 16.71px;
  width: 70px;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.div`
  height: 32px;
  width: 32px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.PrimaryGray};
  border-radius: 50%;
  margin-right: 16px;
`;

export const Avatar = styled.p`
  color: ${p => p.theme.colors.logoGrey};
  font-size: 12px;
  font-weight: bold;
`;

export const Name = styled.p`
  color: #52555f;

  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.04em;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Line = styled.div`
  height: 36px;
  width: 1px;

  background-color: #e0e5eb;

  margin: 0 20px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Exit = styled.button`
  display: flex;
  align-items: center;

  color: #52555f;
  background-color: transparent;

  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.04em;

  padding: 0;
  border: 0;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #ff751d;
  }
`;

export const ExitText = styled.p`
  text-decoration: underline;

  margin: 8px 0;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ExitSvg = styled.svg`
  display: none;

  width: 16px;
  height: 16px;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;
