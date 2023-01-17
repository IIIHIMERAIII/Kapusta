import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Container,
  Input,
  Label,
  BtnsWrapper,
  FormWrapper,
  Form,
  InputsWrapper,
  ImageWrapper,
  LogoWrapper,
  ContentWrapper,
  HintLeft,
  ImageWrapperBottom,
} from './Register.styled';

import { registerUser } from 'redux/auth/authOperations';
import Logo from '../images/title_kapusta.png';
import { NavLink } from 'components/NavLink/NavLink';
import { Btn } from 'components/Buttons/Btn';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(registerUser({ email, password }));
    resetForm();
    navigate('/login');
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <ImageWrapper />
      <ContentWrapper>
        <LogoWrapper>
          <img src={Logo} alt="Logo" loading="lazy" />
          <p>Smart Finance</p>
        </LogoWrapper>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <HintLeft>
              You can log in using an email and password, after registering:
            </HintLeft>
            <InputsWrapper>
              <Label htmlFor="auth-email">
                Email
                <Input
                  type="email"
                  id="auth-email"
                  name="email"
                  value={email}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="your@email.com"
                  onChange={onInputChange}
                />
              </Label>
              <Label htmlFor="auth-password">
                Password
                <Input
                  type="password"
                  id="auth-password"
                  name="password"
                  value={password}
                  required
                  minLength="8"
                  placeholder="••••••••"
                  onChange={onInputChange}
                />
              </Label>
            </InputsWrapper>

            <BtnsWrapper>
              <Btn type="submit" text="Register" />

              <NavLink text="Log in" to="/login" />
            </BtnsWrapper>
          </Form>
        </FormWrapper>
      </ContentWrapper>
      <ImageWrapperBottom />
    </Container>
  );
};

export default RegisterPage;
