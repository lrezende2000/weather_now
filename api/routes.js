const express = require('express');

const router = express.Router();

const authenticationMiddleware = require('./src/middlewares/authentication');

const LoginController = require('./src/controllers/LoginController');
const UserController = require('./src/controllers/UserController');
const WeatherController = require('./src/controllers/WeatherController')

router.use(LoginController);
router.use('/user', authenticationMiddleware, UserController);
router.use('/', authenticationMiddleware, WeatherController);

module.exports = router;