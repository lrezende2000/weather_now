import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
`;

export const WeatherContainer = styled.div`
  padding: 3em 5%;
  
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 5%;

  @media(max-width: 1150px) {
    grid-template-columns: 1fr;
  }
`;
