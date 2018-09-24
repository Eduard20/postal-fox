'use strict';

const express = require('express');
const router = express.Router();
const {getTrackingByCode} = require('../db');

router.get('/', async (req, res) => {
  if (req.query && req.query.code) {
      const doc = await getTrackingByCode(req.query.code);
      return res.send(doc);
  }
    return res.status(400).send({message: 'code not provided'});
});

router.post('/:text', (req, res) => {
  res.send(`text`);
});

router.put('/:text', (req, res) => {
  res.send(`text`);
});

router.delete('/:text', (req, res) => {
  res.send('deleted');
});

module.exports = router;
