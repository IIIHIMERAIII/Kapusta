import styled from 'styled-components';

// import BgImage1mob from '../images/bg-mob.png';
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
  }
`;

export const Hint = styled.p`
  max-width: 80%;
  display: block;
  height: auto;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-style: normal;
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
  font-family: 'Roboto';
  font-style: normal;
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
    font-family: 'Roboto';
    font-style: normal;
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
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  /* margin-top: 20px;
  margin-bottom: 24px; */
  /* gap: 8px; */
  /* align-self: flex-end; */
  flex-direction: column;
  display: flex;
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
  placeholder: ${p => p.theme.colors.placeholderGrey};
  background-color: ${p => p.theme.colors.SecondGray};
  border-radius: 30px;
  border: none;
  color: ${p => p.theme.colors.PrimaryBlack};
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  gap: 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.15;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.PrimaryBlack};
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;
