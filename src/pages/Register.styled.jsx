import styled from 'styled-components';

// import BgCabbage from '../images/double_kapustas.png';
import BgImage2mob from '../images/home_bg_mobile.png';
import BgImage2tabDesk from '../images/home_bg.png';

export const Container = styled.main`
  position: relative;
  overflow: hidden;
  padding: 86px 20px 105px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: url(${BgImage2mob});
  background-position: 110% 104px;
  background-repeat: no-repeat;
  background-size: 83px 89px; */
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 117px 171px 155px 171px;
    /* background-image: url(${BgImage2tabDesk});
    background-position: 0 28px;
    background-repeat: no-repeat;
    background-size: contain; */
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
    margin-bottom: 120px;
  }
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
