const express = require('express')

const { getTeachers, getTeacher, createTeacher, deleteTeacher, updateTeacher } = require('../models/controller/TeacherController')

const { fileCheck } = require('../routes/middleware/file_check')


const router = express.Router();

//GET ALL TEACHERS
router.get('/', getTeachers)

//GET A SINGLE TEACHERS
router.get('/:id', getTeacher)

//POST A NEW TEACHERS
router.post('/', fileCheck, createTeacher)

//DELETE A NEW TEACHERS
router.delete('/:id', deleteTeacher)


//UPDATE A NEW TEACHERS
router.patch('/:id', updateTeacher)



module.exports = router