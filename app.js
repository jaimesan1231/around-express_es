/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/aroundb');
const userRoute = require('./routes/users');
const cardsRoute = require('./routes/cards');

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6442e833a3f4a8d3b5a2f0fe',
  };

  next();
});

app.use('/users', userRoute);
app.use('/cards', cardsRoute);
app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});
app.use((req, res) => {
  res.status(500).send('An error has ocurred on the server');
});

app.listen(3000);
