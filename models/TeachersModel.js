const mongoose = require('mongoose')


const Schema = mongoose.Schema

const teacherSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true
  }
},
  { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema)