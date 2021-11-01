/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import Field from '../Field';
import { Container, List, ListItem } from './styles';

function CityList({ cities, handleGetWeather }) {
  const [filterCity, setFilterCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('Brasilia');
  const [filteredCities, setFilteredCities] = useState(cities);

  const handleFilterCities = () => {
    if (!filterCity) {
      return cities;
    }

    return cities.filter((city) => city.name.toLocaleLowerCase().includes(filterCity.toLocaleLowerCase()));
  }

  const handleSelectCity = (city) => {
    if (city !== selectedCity) {
      setSelectedCity(city);
      handleGetWeather(city);
    }
  }

  useEffect(() => {
    setFilteredCities(handleFilterCities());
  }, [filterCity]);

  return (
    <Container>
      <Field
        name='city'
        Icon={FaSearch}
        value={filterCity}
        setValue={setFilterCity}
      />
      <List className="list">
        {filteredCities.map(city => (
          <ListItem
            onClick={() => handleSelectCity(city.name)}
            selected={city.name === selectedCity}
          >
            {city.name}
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default CityList;
