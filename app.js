/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');

const app = express();
const userRoute = require('./routes/users');
const cardsRoute = require('./routes/cards');

app.use('/users', userRoute);
app.use('/cards', cardsRoute);
app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});
app.use((req, res) => {
  res.status(500).send('An error has ocurred on the server');
});

app.listen(3000);
