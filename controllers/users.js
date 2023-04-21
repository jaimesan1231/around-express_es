const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Ha ocurrido un error en el servidor' }));
};
const getUsersById = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'ID con formato incorrecto' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'No se ha encontrado ningun usuario con esa id' });
      }
      return res.status(500).send({ message: err.message });
    });
};
const postUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Se pasaron datos inválidos a los métodos para crear un usuario/tarjeta o actualizar el avatar/perfil de un usuario.' });
      }
      return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
    });
};
const updateProfile = (req, res) => {
  const { name } = req.body;
  User.findByIdAndUpdate(req.user._id, { name }, {
    new: true,
  })
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Se pasaron datos inválidos a los métodos para crear un usuario/tarjeta o actualizar el avatar/perfil de un usuario.' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'No se ha encontrado ningun usuario con esa id' });
      }
      return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
    });
};
const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, {
    new: true,
  })
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Se pasaron datos inválidos a los métodos para crear un usuario/tarjeta o actualizar el avatar/perfil de un usuario.' });
      }
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'No se ha encontrado ningun usuario con esa id' });
      }
      return res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
    });
};

module.exports = {
  getUsers,
  getUsersById,
  postUser,
  updateProfile,
  updateAvatar,
};
