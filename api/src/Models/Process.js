const mongoose = require('../database');

const ProcessSchema = new mongoose.Schema({
  number:{
    type: Number,
    required: true,
  },
  lawyer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lawyer',
    required: true,
  },
  client:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  progresses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Progress',
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

const Process = mongoose.model('Process', ProcessSchema);

module.exports = Process;