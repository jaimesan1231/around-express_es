/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        const urlRegex = /^(http|https):\/\/(www\.)?[\w.~:/?%#[\]@!$&'()*+,;=-]+[#]?$/;
        return urlRegex.test(value);
      },
      message: (props) => `${props.value} no es una URL válida`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
