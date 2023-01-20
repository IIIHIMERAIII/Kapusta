import { Container, LogoWrapper, ContentWrapper } from './Logins.styled';

import Logo from '../images/title_kapusta.png';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { AnimatedCabbagesBg } from 'components/AnimatedBg/AnimatedBg';
import { AnimatedBottomCabbages } from 'components/AnimatedCabbagesBottom/AnimatedCabbagesBottom';

const LoginPage = () => {
  return (
    <Container>
      <AnimatedCabbagesBg />
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
      <AnimatedBottomCabbages />
    </Container>
  );
};

export default LoginPage;
