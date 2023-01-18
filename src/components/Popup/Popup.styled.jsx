import { BtnElement } from 'components/Buttons/Btn.styled';
import styled, { keyframes } from 'styled-components';

export const WrapBtn = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
`;
export const Title = styled.p`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.TextGray};
  margin-top: 20px;
`;

export const Close = styled(BtnElement)`
  min-width: 0px;
  min-height: 0px;
  border-radius: 50%;
  margin-left: auto;
  background-color: transparent;
  transition: 350ms ease-in-out;
`;

const popup = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;
export const Modal = styled.div`
  position: absolute;
  top: 50%;
  height: 50%;
  transform: translate(50%, 50%);
  width: 340px;
  height: 154px;
  background: ${p => p.theme.colors.PrimaryWhite};
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
  padding: 20px;

  animation: ${popup} 250ms ease-in-out;
`;

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 250ms ease-in-out;
`;
