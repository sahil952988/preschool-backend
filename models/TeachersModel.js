const mongoose = require('mongoose')


const Schema = mongoose.Schema

const teacherSchema = new Schema({
  photo: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
},
  { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema)