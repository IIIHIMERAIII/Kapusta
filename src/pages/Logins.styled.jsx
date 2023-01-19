import styled from 'styled-components';

import BgMonoCabbage from '../images/single_kapusta.png';
import BgCabbage from '../images/double_kapustas.png';
import BgImage2mob from '../images/home_bg_mobile.png';
import BgImage2tabDesk from '../images/home_bg.png';

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 286px;
  background-color: ${p => p.theme.colors.PrimaryGray};
  z-index: -1000;
  border-bottom-left-radius: 125px;

  @media screen and (min-width: 768px) {
    height: 526px;
  }
`;

export const ImageWrapperBottom = styled.div`
  position: absolute;
  width: 83px;
  height: 89px;
  bottom: 0;
  left: 10%;
  background-image: url(${BgMonoCabbage});
  background-repeat: no-repeat;
  background-size: 83px 89px;

  @media screen and (min-width: 768px) {
    background-image: url(${BgCabbage});
    width: 183px;
    height: 142px;
    background-size: contain;
    bottom: 56px;
  }

  @media screen and (min-width: 1280px) {
    bottom: 50px;
  }
`;

export const Container = styled.main`
  position: relative;
  overflow: hidden;
  padding: 86px 20px 105px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BgImage2mob});
  background-position: 110% 104px;
  background-repeat: no-repeat;
  background-size: 83px 89px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 117px 171px 155px 171px;
    background-image: url(${BgImage2tabDesk});
    background-position: 0 28px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media screen and (min-width: 1280px) {
    padding: 117px 91px 125px 229px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FormWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.PrimaryWhite};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  padding: 40px 20px;
  gap: 32px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 426px;
    padding: 56px 84px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
`;

export const Hint = styled.p`
  max-width: 80%;
  display: block;
  height: auto;
  margin: 0;
  padding: 0;

  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.TextGray};
`;

export const HintLeft = styled.p`
  display: block;
  height: auto;
  margin: 0;
  padding: 0;

  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.TextGray};
  text-align: start;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 183px;
  margin-bottom: 50px;
  align-self: flex-start;

  & p {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.15em;
    line-height: 1.16px;
    text-align: start;
    display: inline-block;
    margin-left: 20%;
    margin-top: 2%;

    font-weight: 700;
    text-transform: uppercase;
    color: ${p => p.theme.colors.logoGrey};
  }

  @media screen and (min-width: 768px) {
    width: 306px;
    margin-bottom: 79px;

    & p {
      font-size: 16px;
      letter-spacing: 0.18em;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 377px;
    margin-bottom: 0;
    margin-bottom: 222px;
    align-self: flex-end;
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 20px;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 17px 18px;
  width: 100%;
  font-size: 14px;
  font-family: 'Roboto';
  placeholder: ${p => p.theme.colors.placeholderGrey};
  background-color: ${p => p.theme.colors.SecondGray};
  border-radius: 30px;
  border: none;
  color: ${p => p.theme.colors.PrimaryBlack};
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  /* gap: 12px; */
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 10px;
  /* line-height: 1.15; */
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.PrimaryBlack};
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const ErrorText = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.inputErrorRed};
`;

export const GoogleLoginLink = styled.a`
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 116px;
  min-height: 44px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  transition: 350ms ease-in-out;
  color: ${p => p.theme.colors.PrimaryBlack};
  background-color: ${p => p.theme.colors.PrimaryGray};
  padding: 10px 16px;
  border-radius: 26px;
  border: none;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background-color: ${p => p.theme.colors.PrimaryOrange};
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }

  &:active {
    background-color: ${p => p.theme.colors.PrimaryOrange};
    color: white;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }

  & > svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    min-width: 122px;
  }
`;
