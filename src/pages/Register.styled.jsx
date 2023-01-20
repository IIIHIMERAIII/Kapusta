import styled from 'styled-components';
import { keyframes } from 'styled-components';

import BgMonoCabbage from '../images/single_kapusta.png';
import BgMonoCabbage2 from '../images/single_kapusta-right.png';
import BgEllipse from '../images/ellipse.png';
// import BgCabbage from '../images/double_kapustas.png';
import BgImage2mob from '../images/home_bg_mobile.png';
import BgImage2tabDesk from '../images/home_bg.png';

const singleCabbageBottomAnimation = keyframes`
0% { 
   background-position-x: 0px;
    background-position-y: 2px;
     background-size: 83px 89px;

}
	50% { 
    background-position-x: 0px;
    background-position-y: -2px;
    background-size: 73px 79px;

  }
  100% { 
   background-position-x: 0px;
    background-position-y: 2px;
    background-size: 83px 89px;
}
  `;

const cabbageBottomAnimation = keyframes`
0% { 
   background-position-x: 0px, 0px, 100px, 120px;
    background-position-y: 20px, 100%, 0px, 100px;
    background-size: 89px, 68px, 89px, 65px;

}
	50% { 
    background-position-x: 0px, 0px, 100px, 115px;
    background-position-y: 35px, 100%, 5px, 100px;
    background-size: 94px, 95px, 75px, 95px;

  }
  100% { 
   background-position-x: 0px, 0px, 100px, 120px;
    background-position-y: 20px, 100%, 0px, 100px;
     background-size: 89px, 68px, 89px, 65px;
}
  `;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 286px;
  background-color: ${p => p.theme.colors.PrimaryGray};
  z-index: -100;
  border-bottom-left-radius: 125px;

  @media screen and (min-width: 768px) {
    height: 526px;
  }
`;

export const ImageWrapperBottom = styled.div`
  position: absolute;
  z-index: -10;
  width: 83px;
  height: 89px;
  bottom: 10px;
  left: 10%;
  background-image: url(${BgMonoCabbage});
  background-repeat: no-repeat;
  /* background-size: 83px 89px; */

  animation: ${singleCabbageBottomAnimation} 2s linear infinite;

  @media screen and (min-width: 768px) {
    background-image: url(${BgMonoCabbage}), url(${BgEllipse}),
      url(${BgMonoCabbage2}), url(${BgEllipse});
    width: 250px;
    height: 170px;
    /* background-size: 89px, 68px, 89px, 68px;
    background-position-x: 0px, 0px, 100px, 120px;
    background-position-y: 20px, 100%, 0px, 100px; */
    animation: ${cabbageBottomAnimation} 2s linear infinite;
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
    /* margin-bottom: 76px; */
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
  z-index: 10000;

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
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin: 0 auto; */
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
    margin-bottom: 80px;

    & p {
      font-size: 16px;
      letter-spacing: 0.18em;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 377px;
    /* margin-bottom: 222px; */
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
