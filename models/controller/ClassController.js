const Class = require('../ClassModel')
const mongoose = require('mongoose')


// get all workout
const getClasses = async (req, res) => {
  const teachers = await Teacher.find({}).sort({ createdAt: - 1 });
  res.status(200).json(teachers)
}

//get a single Workout
const getClass = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such classes' })
  }

  const classes = await Class.findById(id)

  if (!classes) {
    res.status(404).json({ error: 'No Such Classes' });
  }
  res.status(200).json(classes)
}

//create new workout
const createClass = async (req, res) => {
  const { classname, photo, teacher, fee, age, time, capacity } = req.body
  try {
    const classes = await Class.create({ classname, photo, teacher, fee, age, time, capacity })
    res.status(200).json(classes);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


//delete a teacher
const deleteClass = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such Classes' })
  }

  const classes = await Class.findOneAndDelete({ _id: id })

  if (!classes) {
    res.status(404).json({ error: 'No Such Classes' });
  }
  res.status(200).json(classes)
}


//update a Teacher
const updateClass = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'No such Class' })
  }

  const classes = await Teacher.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!classes) {
    res.status(404).json({ error: 'No Such Class' });
  }
  res.status(200).json(classes)
}

module.exports = {
  getClasses,
  getClass,
  createClass,
  deleteClass,
  updateClass
}