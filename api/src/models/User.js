const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User =  new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
    validate: [/^(\d{11,13})$/, 'Formato: 99999999999']
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('User', User);
