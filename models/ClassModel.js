

const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
  classname: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  teacher: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Teacher',
  },
  fee: {
    type: String,

  },
  age: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  }
}, { timestamps: true });


module.exports = mongoose.model('Class', classSchema)