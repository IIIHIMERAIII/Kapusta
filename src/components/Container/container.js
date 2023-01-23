import styled from 'styled-components';
import wallet_bg from '../../images/wallet_bg.png';

export const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 1100px;
  }
`;

export const Bg = styled.div`
  background-image: url(${wallet_bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
