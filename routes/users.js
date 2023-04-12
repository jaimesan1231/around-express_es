/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();

const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    res.send(JSON.parse(data));
  });
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    const parsedUsersData = JSON.parse(data);
    const userFound = parsedUsersData.find((user) => user._id === id);
    if (!userFound) {
      res.status(404).send({ message: 'ID de usuario no encontrado' });
    }
    res.send(userFound);
  });
});

module.exports = router;
