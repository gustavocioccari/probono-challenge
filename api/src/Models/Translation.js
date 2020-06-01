const mongoose = require('../database');

const TranslationSchema = new mongoose.Schema({
  rule:{
    type: String,
    required: true,
  },
  translation:{
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
  updatedAt:{
    type: Date,
    default: Date.now,
  },
});

const Translation = mongoose.model('Translation', TranslationSchema);

module.exports = Translation;