const express = require('express');

const WeatherService = require('../services/weather')

const router = express.Router()

router.get('/weather/:city', async (req, res) => {
  try {
    const { city } = req.params

    const response = await WeatherService.getWeather(city);

    if (response.error) {
      throw new Error(response.message);
    }

    return res.json({
      error: false,
      response
    })
  } catch (err) {
    return res.json({
      error: true,
      message: err.message
    })
  }
})

module.exports = router;