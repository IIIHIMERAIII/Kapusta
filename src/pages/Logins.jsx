import {
  Container,
  ImageWrapper,
  LogoWrapper,
  ContentWrapper,
  ImageWrapperBottom,
} from './Logins.styled';

import Logo from '../images/title_kapusta.png';
import { AuthForm } from 'components/AuthForm/AuthForm';

const LoginPage = () => {
  return (
    <Container>
      <ImageWrapper />
      <ContentWrapper>
        <LogoWrapper>
          <img src={Logo} alt="Logo" loading="lazy" />
          <p>Smart Finance</p>
        </LogoWrapper>
        <AuthForm
          formTitle="login"
          btnText="Log in"
          navLinkText="Register"
          navLinkAdress="/register"
          hintText="Or log in using an email and password, after registering:"
        />
      </ContentWrapper>
      <ImageWrapperBottom />
    </Container>
  );
};

export default LoginPage;
