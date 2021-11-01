require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8000;
const routes = require('./routes');

require('./database');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/hello', (req, res) => {
  return res.json({ hello: 'world' });
})

app.use(routes);

app.listen(PORT, () => console.log('App is running'));