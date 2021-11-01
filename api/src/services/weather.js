const axios = require('axios').default

module.exports = {
  getWeather: async (city) => {
    try {
      const url = `https://wttr.in/${city}?format=j1`

      const { data } = await axios.get(url)
      const current_condition = data.current_condition[0]

      const response = {
        weather_now: {
          termic_sensation: current_condition.FeelsLikeC,
          temperature: current_condition.temp_C,
          rain: current_condition.precipMM,
          wind_speed: current_condition.windspeedKmph,
          situation: current_condition.weatherDesc[0].value
        },
        weathers: data.weather.map(weather => ({
          date: weather.date,
          min_temperature: weather.mintempC,
          max_temperature: weather.maxtempC,
          hour: weather.hourly
            .filter((_, index) => [2, 4, 6].indexOf(index) > -1)
            .map(prevision => ({
              termic_sensation: prevision.FeelsLikeC,
              temperature: prevision.temp_C,
              rain: prevision.precipMM,
              rain_percentual: prevision.chanceofrain,
              wind_speed: prevision.windspeedKmph,
              max_wind_speed: prevision.WindGustKmph,
              situation: prevision.weatherDesc[0].value
            }))
        }))

      }

      return response;
    } catch (err) {
      return ({
        error: true,
        message: err.message
      });
    }
  }
}