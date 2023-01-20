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
  z-index: -1000;
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
    align-items: center;
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
