import styled from 'styled-components';
import { keyframes } from 'styled-components';

import BgMonoCabbageOrange from '../../images/cabbage-orange.png';
import BgMonoCabbage from '../../images/single_kapusta.png';

const mainCabbageAnimation = keyframes`

  0% {
      -webkit-transform: translateX(100vw) rotate(720deg);
    transform: translateX(100vw) rotate(720deg);
  }
  100% {
       -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
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

export const Particles = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0px;
  padding: 0px;

  & li {
    position: absolute;
    display: block;
    list-style: none;

    background: transparent;
    -webkit-animation: ${mainCabbageAnimation} 25s linear infinite;
    animation: ${mainCabbageAnimation} 12s linear infinite;

    &:nth-child(1) {
      bottom: 25%;
      width: 80px;
      height: 80px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-duration: 9s;
      animation-duration: 9s;
      background-image: url(${BgMonoCabbage});
      background-repeat: no-repeat;
      background-size: contain;
    }
    &:nth-child(2) {
      bottom: 10%;
      width: 70px;
      height: 70px;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 12s;
      animation-duration: 12s;
      background-image: url(${BgMonoCabbage});
      background-repeat: no-repeat;
      background-size: contain;
    }
    &:nth-child(3) {
      bottom: 70%;
      width: 83px;
      height: 89px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-duration: 9s;
      animation-duration: 9s;
      background-image: url(${BgMonoCabbage});
      background-repeat: no-repeat;
      background-size: contain;
    }

    &:nth-child(4) {
      bottom: 40%;
      width: 60px;
      height: 60px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-duration: 18s;
      animation-duration: 18s;
      background-image: url(${BgMonoCabbage});
      background-repeat: no-repeat;
      background-size: contain;
    }

    &:nth-child(5) {
      bottom: 65%;
      width: 80px;
      height: 80px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-duration: 15s;
      animation-duration: 15s;
      background-image: url(${BgMonoCabbage});
      background-repeat: no-repeat;
      background-size: contain;
    }

    /* &:nth-child(6) {
      display: none;
    }

    &:nth-child(7) {
      display: none;
    } */

    &:nth-child(8) {
      bottom: 50%;
      width: 85px;
      height: 85px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-duration: 35s;
      animation-duration: 35s;
      background-image: url(${BgMonoCabbage});
      background-repeat: no-repeat;
      background-size: contain;
    }

    /* &:nth-child(9) {
      display: none;
    }

    &:nth-child(10) {
      display: none;
    } */

    @media screen and (min-width: 768px) {
      bottom: -150px;
      width: 90px;
      height: 90px;

      &:nth-child(6) {
        display: block;
        bottom: 55%;
        width: 110px;
        height: 110px;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        -webkit-animation-duration: 20s;
        animation-duration: 20s;
        background-image: url(${BgMonoCabbage});
        background-repeat: no-repeat;
        background-size: contain;
      }

      &:nth-child(7) {
        display: block;
        bottom: 35%;
        width: 150px;
        height: 150px;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        background-image: url(${BgMonoCabbage});
        /* background-image: url(${BgMonoCabbageOrange}); */
        background-repeat: no-repeat;
        background-size: contain;
      }

      &:nth-child(9) {
        display: block;
        bottom: 20%;
        width: 95px;
        height: 95px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 35s;
        animation-duration: 35s;
        background-image: url(${BgMonoCabbage});
        background-repeat: no-repeat;
        background-size: contain;
      }

      &:nth-child(10) {
        display: block;
        bottom: 80%;
        width: 150px;
        height: 150px;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        -webkit-animation-duration: 11s;
        animation-duration: 15s;
        background-image: url(${BgMonoCabbage});
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
`;
