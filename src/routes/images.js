const {Image, validate} = require('../models/image.js'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const images = await Image.find().sort('title');
  res.send(images);
});

module.exports = router; 