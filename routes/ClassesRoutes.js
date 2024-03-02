const express = require('express')

const { getClasses, getClass, createClass, deleteClass, updateClass } = require('../models/controller/ClassController')


const router = express.Router();

//GET ALL TEACHERS
router.get('/', getClasses)

//GET A SINGLE TEACHERS
router.get('/:id', getClass)

//POST A NEW TEACHERS
router.post('/', createClass)

//DELETE A NEW TEACHERS
router.delete('/:id', deleteClass)


//UPDATE A NEW TEACHERS
router.patch('/:id', updateClass)



module.exports = router