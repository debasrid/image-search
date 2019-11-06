const Joi = require('joi');
const mongoose = require('mongoose');

const Image = mongoose.model('Image', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  keywords: [{
    type: String,
    required: false,
    minlength: 3,
    maxlength: 50
  }],
  url: {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 50
  }
}));

function validateImage(image) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    keywords: Joi.array().items(Joi.string().min(3).max(50)),
    url: Joi.string().min(5).max(50)
  };

  return Joi.validate(image, schema);
}

exports.Image = Image; 
exports.validate = validateImage;