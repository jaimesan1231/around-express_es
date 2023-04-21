const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Ha ocurrido un error en el servidor' }));
};
const postCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Se pasaron datos inválidos a los métodos para crear un usuario/tarjeta o actualizar el avatar/perfil de un usuario.' });
      }
      return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
    });
};
const deleteCard = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndRemove(cardId)
    .orFail()
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Se pasaron datos inválidos a los métodos para crear un usuario/tarjeta o actualizar el avatar/perfil de un usuario.' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'No se ha encontrado ninguna tarjeta con esa id' });
      }
      return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
    });
};
const putLike = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(cardId, { $addToSet: { likes: req.user._id } }, {
    new: true,
  })
    .orFail()
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Se pasaron datos inválidos a los métodos para crear un usuario/tarjeta o actualizar el avatar/perfil de un usuario.' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'No se ha encontrado ninguna tarjeta con esa id' });
      }
      return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
    });
};
const deleteLike = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(cardId, { $pull: { likes: req.user._id } }, {
    new: true,
  })
    .orFail()
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Se pasaron datos inválidos a los métodos para crear un usuario/tarjeta o actualizar el avatar/perfil de un usuario.' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'No se ha encontrado ninguna tarjeta con esa id' });
      }
      return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
    });
};

module.exports = {
  getCards,
  postCard,
  deleteCard,
  putLike,
  deleteLike,
};
