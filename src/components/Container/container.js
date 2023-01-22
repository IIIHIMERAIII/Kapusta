import styled from "styled-components";
import wallet_bg from '../../images/wallet_bg.png'

export const Main = styled.main`

margin-left: auto;
margin-right: auto;

/* width: 280px;  */
padding:0 20px;

@media screen and (min-width: 768px) {
width: 704px; 
padding:0 32px;
} 
@media screen and (min-width: 1280px){
width: 1100px;
padding:0 92px;
}
`;

export const Bg = styled.div`
  background-image: url(${wallet_bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

