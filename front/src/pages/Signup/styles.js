import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const WeatherImage = styled.img`
  width: 70%;
`;

export const SignupContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 1.5em;
  }
`;

export const LogoTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
`;

export const LogoImage = styled.img``;

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 3.5em;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 3em;
  padding: 1em 0;
  border-radius: .5em;

  background-color: var(--primary-color);
  cursor: pointer;

  text-align: center;
  font-weight: 700;
  font-size: .9em;
  color: black;
`;

export const LoginContainer = styled.div`
  width: 100%;
  margin-top: .6em;

  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: underline;
  }
`;