/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    validate: {
      validator(value) {
        const urlRegex = /^(http|https):\/\/(www\.)?[\w.~:/?%#[\]@!$&'()*+,;=-]+[#]?$/;
        return urlRegex.test(value);
      },
      message: (props) => `${props.value} no es una URL válida`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },

});

module.exports = mongoose.model('card', cardSchema);
