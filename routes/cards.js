/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();

const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../data/cards.json');

router.get('/', (req, res) => {
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    res.send(data);
  });
});

module.exports = router;
