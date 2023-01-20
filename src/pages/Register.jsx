import {
  Container,
  ImageWrapper,
  LogoWrapper,
  ContentWrapper,
  ImageWrapperBottom,
} from './Register.styled';

import Logo from '../images/title_kapusta.png';
import { AuthForm } from 'components/AuthForm/AuthForm';

const RegisterPage = () => {
  return (
    <Container>
      <ImageWrapper />
      <ContentWrapper>
        <LogoWrapper>
          <img src={Logo} alt="Logo" loading="lazy" />
          <p>Smart Finance</p>
        </LogoWrapper>
        <AuthForm
          formTitle="register"
          btnText="Register"
          navLinkText="Log in"
          navLinkAdress="/"
          hintText="You can log in using an email and password, after registering:"
        />
      </ContentWrapper>
      <ImageWrapperBottom />
    </Container>
  );
};

export default RegisterPage;
