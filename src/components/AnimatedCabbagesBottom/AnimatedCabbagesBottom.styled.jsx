import styled from 'styled-components';
import { keyframes } from 'styled-components';

import BgMonoCabbage from '../../images/single_kapusta.png';
import BgMonoCabbage2 from '../../images/single_kapusta-right.png';
import BgEllipse from '../../images/ellipse.png';

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
