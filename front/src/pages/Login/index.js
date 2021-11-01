import { useContext, useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import Field from '../../components/Field';
import {
  Container,
  ImageContainer,
  WeatherImage,
  LoginContainer,
  LogoContainer,
  LogoTitle,
  LogoImage,
  FormContainer,
  SubmitButton,
  SignupContainer,
} from './styles';
import Message from '../../components/Message';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useContext(AuthContext);

  const validateFields = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/gi;

    if (!email || !email.match(emailRegex) || password.length < 6) {
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateFields()) {
      Message('Preencha todos os campos corretamente');
      return;
    }

    handleLogin(email, password);
  }

  return (
    <Container>
      <ImageContainer>
        <WeatherImage alt="Weather" src="/images/weather.svg" />
      </ImageContainer>
      <LoginContainer>
        <LogoContainer>
          <LogoTitle>Weather Now</LogoTitle>
          <LogoImage src="/images/logo.png" />
        </LogoContainer>

        <FormContainer onSubmit={handleSubmit}>
          <Field
            type='email'
            name='email'
            Icon={FaEnvelope}
            value={email}
            setValue={setEmail}
          />
          <Field
            type='password'
            name='password'
            Icon={FaLock}
            value={password}
            setValue={setPassword}
          />

          <SubmitButton type='submit'>
            Log In
          </SubmitButton>

          <SignupContainer>
            <Link to="/signup">Don't have an account? Sign up</Link>
          </SignupContainer>
        </FormContainer>
      </LoginContainer>
    </Container>
  )
}

export default Login;
