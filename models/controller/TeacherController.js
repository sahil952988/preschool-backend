const Teacher = require('../TeachersModel')
const mongoose = require('mongoose')


// get all workout
const getTeachers = async (req, res) => {
  const teachers = await Teacher.find({}).sort({ createdAt: - 1 });
  res.status(200).json(teachers)
}

//get a single Workout
const getTeacher = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such Teachers' })
  }

  const teacher = await Teacher.findById(id)

  if (!teacher) {
    res.status(404).json({ error: 'No Such Teacher' });
  }
  res.status(200).json(teacher)
}

//create new workout
const createTeacher = async (req, res) => {
  const { fullname, profession, photo } = req.body
  try {
    const teacher = await Teacher.create({ fullname, profession, photo: req.imagePath })
    res.status(200).json(teacher);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


//delete a teacher
const deleteTeacher = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such Teachers' })
  }

  const teacher = await Teacher.findOneAndDelete({ _id: id })

  if (!teacher) {
    res.status(404).json({ error: 'No Such Teacher' });
  }
  res.status(200).json(teacher)
}


//update a Teacher
const updateTeacher = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such Teachers' })
  }

  const teacher = await Teacher.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!teacher) {
    res.status(404).json({ error: 'No Such Teacher' });
  }
  res.status(200).json(teacher)
}

module.exports = {
  getTeachers,
  getTeacher,
  createTeacher,
  deleteTeacher,
  updateTeacher
}