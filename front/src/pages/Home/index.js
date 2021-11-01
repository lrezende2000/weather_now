import { useState, useEffect } from 'react';

import cities from '../../data/cities.json';
import api from '../../services/api';

import Header from '../../components/Header';
import CityList from '../../components/CityList';
import Weather from '../../components/Weather';
import Message from '../../components/Message';
import { Container, WeatherContainer } from './styles';



function Home() {
  const [response, setResponse] = useState(null);

  const handleGetWeather = async (city) => {
    try {
      setResponse(null);
      const { data } = await api.get(`/weather/${city}`);
      setResponse({...data.response, city});
    } catch (err) {
      Message(err.response.data.message, 'error');
      setResponse(null);
    }
  }

  useEffect(() => {
    handleGetWeather('Brasilia');
  }, []);

  return (
    <Container>
      <Header />
      <WeatherContainer>
        <CityList cities={cities} handleGetWeather={handleGetWeather} />
        <Weather data={response} />
      </WeatherContainer>
    </Container>
  );
}

export default Home;
