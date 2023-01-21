import styled from "styled-components";
import wallet_bg from '../../images/wallet_bg.png'

export const Main = styled.main`
width: 1100px;
margin-left: auto;
margin-right: auto;
`;

export const Bg = styled.div`
  background-image: url(${wallet_bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`