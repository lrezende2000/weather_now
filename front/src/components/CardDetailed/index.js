import { FaCloudRain } from 'react-icons/fa';

import { formatDate } from '../../utils/date';

import {
  Container,
  InfoContainer,
  Infos,
  AditionalInfos,
  DayContainer,
  Day,
  PrevisionContainer,
  Prevision,
} from './styles';

function CardDetailed({ info }) {
  if (!info) {
    return <h2>loading...</h2>
  }

  return (
    <Container>
      <InfoContainer>
        <Infos>
          <FaCloudRain size={30} color="var(--primary-color)" />
          <span>{info.city} ({info.weather_now.situation})</span>
        </Infos>

        <AditionalInfos>
          <p>Temperature: {info.weather_now.temperature}°({info.weather_now.termic_sensation}°) C</p>
          <p>Mix Temperature: {info.weathers[0].min_temperature} °C</p>
          <p>Max Temperature: {info.weathers[0].max_temperature} °C</p>
          <p>Wind: {info.weather_now.wind_speed} Kmph</p>
          <p>Rain: {info.weather_now.rain} mm</p>
        </AditionalInfos>

        <p>Last update: {formatDate(new Date())}</p>
      </InfoContainer>
      <DayContainer>
        {info.weathers.map(weather => (
          <Day key={weather.date}>
            <div>
              <span>{formatDate(weather.date, false)}</span>
            </div>

            <PrevisionContainer>
              {weather.hour.map((prevision, index) => (
                <Prevision key={`${prevision.situation}_${index}`}>
                  {index === 0 && <span>Morning ({prevision.situation})</span>}
                  {index === 1 && <span>Midday ({prevision.situation})</span>}
                  {index === 2 && <span>Night ({prevision.situation})</span>}
                  <div>
                    <p>Temperature: {prevision.termic_sensation} °C</p>
                    <p>Rain: {prevision.rain} mm - {prevision.rain_percentual}%</p>
                    <p>Wind: {prevision.wind_speed} Kmph - {prevision.max_wind_speed} Kmph</p>
                  </div>
                </Prevision>
              ))}
            </PrevisionContainer>
          </Day>
        ))}
      </DayContainer>
    </Container>
  )
}

export default CardDetailed;
