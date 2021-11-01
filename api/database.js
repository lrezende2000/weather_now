const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/api';

mongoose.connect(URI)
  .then(() => console.log('MongoDB online'))
  .catch((err) => console.log(err));