import { useState, useContext } from 'react';
import { FaUserAlt, FaLock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext'

import Field from '../../components/Field';
import Message from '../../components/Message';
import {
  Container,
  ImageContainer,
  WeatherImage,
  SignupContainer,
  LogoContainer,
  LogoTitle,
  LogoImage,
  FormContainer,
  SubmitButton,
  LoginContainer
} from './styles';

function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const { handleLogin } = useContext(AuthContext);

  const validateFields = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/gi;

    if (
      !email.match(emailRegex)
      || password.length < 6
      || phone.length < 11
      || name.length === 0
      || password !== passwordConfirmation
    ) {
      return false;
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      Message('Preencha todos os campos corretamente');
      return;
    }

    try {
      await api.post('/signup', { email, password, phone, name });

      handleLogin(email, password);
    } catch (err) {
      Message(err.response.data.message, 'error');
    }
  }

  return (
    <Container>
      <ImageContainer>
        <WeatherImage alt="Weather" src="/images/weather.svg" />
      </ImageContainer>
      <SignupContainer>
        <LogoContainer>
          <LogoTitle>Weather Now</LogoTitle>
          <LogoImage src="/images/logo.png" />
        </LogoContainer>

        <FormContainer onSubmit={handleSubmit}>
          <Field
            name='name'
            Icon={FaUserAlt}
            value={name}
            setValue={setName}
          />
          <Field
            type='email'
            name='email'
            Icon={FaEnvelope}
            value={email}
            setValue={setEmail}
          />
          <Field
            type='tel'
            name='phone'
            Icon={FaPhoneAlt}
            value={phone}
            setValue={setPhone}
          />
          <Field
            type='password'
            name='password'
            Icon={FaLock}
            value={password}
            setValue={setPassword}
          />
          <Field
            type='password'
            name='password confirmation'
            Icon={FaLock}
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
          />

          <SubmitButton type='submit'>
            Sign Up
          </SubmitButton>

          <LoginContainer>
            <Link to="/login">Have an account? Log In</Link>
          </LoginContainer>
        </FormContainer>
      </SignupContainer>
    </Container>
  );
}

export default Signup;
