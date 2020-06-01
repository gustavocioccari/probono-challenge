const mongoose = require('../database');

const ProgressSchema = new mongoose.Schema({
  description:{
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

const Progress = mongoose.model('Progress', ProgressSchema);

module.exports = Progress;