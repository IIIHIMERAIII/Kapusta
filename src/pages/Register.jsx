import { Container, LogoWrapper, ContentWrapper } from './Register.styled';

import Logo from '../images/title_kapusta.png';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { AnimatedCabbagesBg } from 'components/AnimatedBg/AnimatedBg';
import { AnimatedBottomCabbages } from 'components/AnimatedCabbagesBottom/AnimatedCabbagesBottom';

const RegisterPage = () => {
  return (
    <Container>
      <AnimatedCabbagesBg />
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
      <AnimatedBottomCabbages />
    </Container>
  );
};

export default RegisterPage;
