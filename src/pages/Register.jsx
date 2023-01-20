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
  ErrorText,
  InputWrapper,
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
  const [error, setError] = useState(false);

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

    if (email.trim().length === 0 || password.trim().length === 0) {
      setError(true);
      return null;
    }

    dispatch(registerUser({ email, password }));
    resetForm();
    navigate('/login');
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError(false);
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
              <InputWrapper>
                <Label htmlFor="auth-email">
                  {error && <ErrorText>*</ErrorText>}

                  <span>Email</span>
                </Label>
                <Input
                  type="email"
                  id="auth-email"
                  name="email"
                  value={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="your@email.com"
                  onChange={onInputChange}
                  onInvalid={e => {
                    setError(true);
                  }}
                />
                {error && <ErrorText>This is a required field</ErrorText>}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="auth-password">
                  {error && <ErrorText>*</ErrorText>}
                  <span>Password</span>
                </Label>
                <Input
                  type="password"
                  id="auth-password"
                  name="password"
                  value={password}
                  minLength="8"
                  placeholder="••••••••"
                  onChange={onInputChange}
                  onInvalid={e => {
                    setError(true);
                  }}
                />
                {error && <ErrorText>This is a required field</ErrorText>}
              </InputWrapper>
            </InputsWrapper>

            <BtnsWrapper>
              <Btn type="submit" text="Register" />

              <NavLink text="Log in" to="/" />
            </BtnsWrapper>
          </Form>
        </FormWrapper>
      </ContentWrapper>
      <ImageWrapperBottom />
    </Container>
  );
};

export default RegisterPage;
